import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as eventService from "../services/eventService"

export const eventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    eventService.getAll().then((result) => {
      setEvents(result);
    });
  }, []);

  const addEvent = (eventData) => {
    setEvents((state) => [...state, eventData]);
    navigate("/catalog");
  };

  const eventEdit = (eventId, eventData) => {
    setEvents((state) => state.map((x) => (x._id === eventId ? eventData : x)));
  };
  return (
    <eventContext.Provider value={{ events, eventEdit, addEvent }}>
      {children}
    </eventContext.Provider>
  );
};

export const useEventContext = () => {
    const context = useContext(eventContext);

    return context;
};
