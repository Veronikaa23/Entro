import "./Catalog.css";
import Spinner from "../Spinner/Spinner";
import { useRef, useState, useEffect } from "react";
// import { useEventContext } from "../../context/eventContext";
import CatalogEvent from "./Event/CatalogEvent";
import * as eventService from "../../services/eventService";

const Catalog = () => {
  // const { events } = useEventContext();

  const inputRef = useRef();
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  // const [eventPaginate, setEventPaginate] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    eventService
      .search(searchText, page, 4)
      .then((res) => {
        setSearchData(res);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [searchText, page]);

  // console.log(searchData);
  // useEffect(() => {
  //   setIsLoading(true);
  //   eventService
  //   .getAllPagination(page, 4)
  //   .then((res) => {
  //     setEventPaginate(res);
  //   })
  //   .catch((err) => setError(err))
  //   .finally(() => setIsLoading(false));

  // },[page]);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchText(inputRef.current.value);
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p> Error: {error} </p>;
  }

  return (
    <main>
      <form className="search">
        <input
          ref={inputRef}
          type="search"
          name=""
          placeholder="Search for events in your city here..."
        />
        <button type="submit" onClick={searchHandler} className="btn-search">
          Search
        </button>
      </form>

      {
        <section id="find-section">
          {searchData.length ? (
            searchData.map((x) => <CatalogEvent key={x._id} event={x} />)
          ) : (
            <div className="no-data-listing">
              <p className="no-offer">
                No match was found for the submitted type...
              </p>
            </div>
          )}
        </section>
      }
      <div id="paginate">
        <button
          disabled={page === 0}
          onClick={() => setPage((prevPage) => prevPage - 4)}
        >
          Prev
        </button>
        <button
          disabled={searchData.length < 4}
          onClick={() => setPage((prevPage) => prevPage + 4)}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Catalog;
