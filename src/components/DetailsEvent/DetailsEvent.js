import "./DetailsEvent.css"

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


  useEffect(() => {
    eventService.getOne(eventId).then((result) => {
      setCurrentEvent(result);
    });
  }, [eventId]);

  useEffect(() => {
    eventService.getLikes(eventId).then((result) => {
      setNumberOfLikes(result);
    });
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
    }
  };

  return (
    <section id="event-details">
      <h1>Event Details</h1>
      <div className="info-section">
        <div className="event-header">
          <img className="event-img" src={currentEvent.imageUrl} alt="poster" />
          <h1>{currentEvent.title}</h1>
        </div>
        <p className="date">Date: {currentEvent.date}</p>
        <p className="tickets">
          Available tickets: {currentEvent.tickets}
        </p>
        <p className="city">City: {currentEvent.city}</p>
        <p className="text">{currentEvent.description}</p>
        <div className="likes">Total likes: {numberOfLikes} </div>

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
              <button onClick={(e) => onLike(e)} className="btn-like">
                Like
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DetailsEvent;
