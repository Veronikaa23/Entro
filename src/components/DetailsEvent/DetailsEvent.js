import "./DetailsEvent.css";
import Spinner from "../Spinner/Spinner";

import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
// import { eventContext } from '../../context/eventContext';
import { useEventContext } from "../../context/eventContext";

import * as eventService from "../../services/eventService";
import * as commentService from "../../services/commentService";

const DetailsEvent = () => {
  const { user } = useAuthContext();
  const { eventId } = useParams();
  const { addComment, eventRemove } = useEventContext();
  const [currentEvent, setCurrentEvent] = useState({});
  // const [numberOfLikes, setNumberOfLikes] = useState();

  const navigate = useNavigate();

  const isOwner = currentEvent?._ownerId === user?._id;
  const isEmpty = Object.keys(user).length === 0;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    eventService
      .getOne(eventId)
      .then((result) => {
        setCurrentEvent(result)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [eventId]);

//   useEffect(() => {
//     (async () => {
//         const eventDetails = await eventService.getOne(eventId);
//         console.log(eventDetails);
//         const eventComment = await commentService.getByEventId(eventId);

//         fetchEventDetails(eventId, { ...eventDetails, comments: eventComment.map(x => `${x.user.email}: ${x.text}`) });
//     })();
// }, [])

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
    console.log(comment);

    commentService.create(eventId, comment).then((result) => {
      addComment(eventId, comment);
    });
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
        {/* <p className="likes">People who are interested of: {numberOfLikes} </p> */}
        <p className="text">{currentEvent.description}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {currentEvent.comments?.map((x) => (
              <li key={x} className="comment">
                <p>{x}</p>
              </li>
            ))}
          </ul>

          {!currentEvent.comments && <p className="no-comment">No comments.</p>}
        </div>

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
            {/* {!isOwner && (
              <button onClick={addCommentHandler} className="btn-like">
                Interested
              </button>
            )} */}
          </div>
        )}
      </div>
      {!isEmpty && (
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={addCommentHandler}>
            <textarea name="comment" placeholder="Comment......" />

            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      )}
    </section>
  );
};

export default DetailsEvent;
