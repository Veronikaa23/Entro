import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import * as eventService from "../../services/eventService";

const DetailsEvent = () => {
  const { eventId } = useParams();
  const { user } = useAuthContext();
  const [currentEvent, setCurrentEvent] = useState({});

  const isOwner = currentEvent?._ownerId === user?._id;
  const isEmpty = Object.keys(user).length === 0;

  console.log(isOwner);

  useEffect(() => {
    eventService.getOne(eventId).then((result) => {
      setCurrentEvent(result);
    });
  }, [eventId]);
  console.log(user);

  return (
    <section id="event-details">
      <h1>Event Details</h1>
      <div className="info-section">
        <div className="event-header">
          <img className="event-img" src={currentEvent.imageUrl} alt="poster" />
          <h1>{currentEvent.title}</h1>
          <span className="date">Date: {currentEvent.date}</span>
        </div>
        <span className="seats">Tickets: {currentEvent.seats}</span>
        <p className="text">{currentEvent.description}</p>

        {!isEmpty && (
          <div className="buttons">
            {isOwner && (
              <div>
                <Link
                  to={`/events/${currentEvent._id}/edit`}
                  className="button"
                >
                  Edit
                </Link>
                <Link
                  to={`/events/${currentEvent._id}/delete`}
                  className="button"
                >
                  Delete
                </Link>
              </div>
            )}
            {!isOwner && (
              <Link to="#" className="button">
                Buy
              </Link>
            )}
          </div>
        )}
      </div>
      {/* 
        <article className="buy-ticket">
            <label>Buy a ticket:</label>
            <form className="form" onSubmit={buyTicketHandler}>
                <input
                    type="text"
                    name="username"
                    placeholder="John Doe"
                    onChange={onChange}
                    onBlur={validateUsername}
                    value={comment.username}
                />

                {error.username && 
                    <div style={{color: 'red'}}>{error.username}</div>
                } */}
      {/* 
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    onChange={onChange}
                    value={comment.comment}
                /> */}
      {/* 
                <input
                    className="btn submit"
                    type="submit"
                    value="Buy"
                />
            </form>
        </article> */}
    </section>
  );
};

export default DetailsEvent;
