import Spinner from "../components/Spinner/Spinner";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as eventService from "../services/eventService";

export const eventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    eventService
      .getAll()
      .then((result) => {
        setEvents(result);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p> Error: {error} </p>;
  }

  // useEffect(() => {
  //   setIsLoading(true);
  //   eventService
  //     .search(searchText)
  //     .then((res) => {
  //       setSearchData(res);
  //     })
  //     .catch((err) => setError(err))
  //     .finally(() => setIsLoading(false));
  // }, [searchText]);

  // useEffect(() => {
  //   eventService.getLikes(eventId).then((result) => {
  //     setNumberOfLikes(result);
  //   });
  // }, [eventId]);

  const eventAdd = (eventData) => {
    setEvents((state) => [...state, eventData]);
    navigate("/catalog");
  };

  const eventEdit = (eventId, eventData) => {
    setEvents((state) => state.map((x) => (x._id === eventId ? eventData : x)));
  };

  const eventRemove = (eventId) => {
    setEvents((state) => state.filter((x) => x._id !== eventId));
  };

  return (
    <eventContext.Provider
      value={{
        events,
        eventEdit,
        eventAdd,
        eventRemove,
      }}
    >
      {children}
    </eventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(eventContext);

  return context;
};
