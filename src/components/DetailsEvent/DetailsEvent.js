import "./DetailsEvent.css";
import Spinner from "../Spinner/Spinner";

import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEventContext } from "../../context/eventContext";
import * as eventService from "../../services/eventService";

const DetailsEvent = () => {
  const { user } = useAuthContext();
  const { eventId } = useParams();
  const { eventRemove } = useEventContext();
  const [currentEvent, setCurrentEvent] = useState({});
  const [numberOfLikes, setNumberOfLikes] = useState();

  const navigate = useNavigate();

  const isOwner = currentEvent?._ownerId === user?._id;
  const isEmpty = Object.keys(user).length === 0;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    eventService
      .getOne(eventId)
      .then((result) => {
        setCurrentEvent(result);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [eventId]);

  useEffect(() => {
    eventService
      .getLikes(eventId)
      .then((result) => {
        setNumberOfLikes(result);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [eventId]);

  const eventDeleteHandler = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (confirmation) {
      eventService.remove(eventId).then(() => {
        eventRemove(eventId);
        navigate("/catalog");
      });
    }
  };
  const onLike = (e) => {
    e.preventDefault();
    const isClicked = e.target;
    if (isClicked) {
      eventService.likes(eventId);
      console.log("clicked");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p> Error: {error} </p>;
  }

  return (
    <section id="event-details">
      <h1>Event Details</h1>
      <div className="info-section">
        <div className="event-header">
          <img className="event-img" src={currentEvent.imageUrl} alt="poster" />
          <h1>{currentEvent.title}</h1>
        </div>
        <p className="date">Date: {currentEvent.date}</p>
        <p className="tickets">Available tickets: {currentEvent.tickets}</p>
        <p className="city">City: {currentEvent.city}</p>
        <p className="likes">People who are interested of: {numberOfLikes} </p>
        <p className="text">{currentEvent.description}</p>

        {!isEmpty && (
          <div className="buttons">
            {isOwner && (
              <div>
                <Link
                  to={`/events/${currentEvent._id}/edit`}
                  className="btn-edit"
                >
                  Edit
                </Link>
                <button onClick={eventDeleteHandler} className="btn-delete">
                  Delete
                </button>
              </div>
            )}
            {!isOwner && (
              <button onClick={onLike} className="btn-like">
                Interested
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DetailsEvent;
