import "./DetailsEvent.css";
import Spinner from "../Spinner/Spinner";

import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEventContext } from "../../context/eventContext";

import * as eventService from "../../services/eventService";
import * as commentService from "../../services/commentService";

const DetailsEvent = () => {
  const { user } = useAuthContext();
  const { eventId } = useParams();
  const { addComment, eventRemove } = useEventContext();
  const [currentEvent, setCurrentEvent] = useState({});
  const [eventComments, setEventComments] = useState([]);
  const [comment, setComment] = useState("");

  console.log(user);

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
    commentService
      .getByEventId(eventId)
      .then((result) => {
        setEventComments(result);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [eventId, comment]);

  useEffect(() => {
    if(comment){
      commentService.create(eventId, comment)
    }
  
  }, [eventId, comment]);

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
  const addCommentHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = formData.get("comment");

    setComment(comment);
    e.target.reset();
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
          </div>
        )}

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {eventComments?.map((x) => (
              <li key={x._id} className="comment">
                <p>{x.text}</p>
              </li>
            ))}
          </ul>

          {!eventComments.length && <p className="no-comment">No comments yet.</p>}
        </div>
      </div>
      {!isEmpty && (
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form-comment" onSubmit={addCommentHandler}>
            <textarea name="comment" placeholder="Comment......" />
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      )}
    </section>
  );
};

export default DetailsEvent;
