import "./Catalog.css";
import Spinner from "../Spinner/Spinner";
import { useContext, useRef, useState, useEffect } from "react";
import { eventContext } from "../../context/eventContext";
import CatalogEvent from "./Event/CatalogEvent";
import * as eventService from "../../services/eventService";

const Catalog = () => {
  const { events } = useContext(eventContext);

  const inputRef = useRef();
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    eventService
      .search(searchText)
      .then((res) => {
        setSearchData(res);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [searchText]);

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

      {searchText.length > 0 ? (
        <section id="find-section">
          {searchData.length > 0 ? (
            searchData.map((x) => <CatalogEvent key={x._id} event={x} />)
          ) : (
            <div className="no-data-listing">
              <p className="no-offer">
                No match was found for the submitted type...
              </p>
            </div>
          )}
        </section>
      ) : (
        <section id="catalog-page">
          <h1>All Events</h1>

          {events.length > 0 ? (
            events.map((x) => <CatalogEvent key={x._id} event={x} />)
          ) : (
            <h3 className="no-articles">No events yet</h3>
          )}
        </section>
      )}
    </main>
  );
};

export default Catalog;
