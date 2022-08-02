import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as eventService from "../../services/eventService"

const DetailsEvent = () => {

  const { eventId } = useParams();
  const [currentEvent, setCurrentEvent] = useState({})

  useEffect(()=>{
    eventService.getOne(eventId)
    .then(result => {
      setCurrentEvent(result)
    })
  },[])

  
  return (
    <section id="event-details">
      <h1>Event Details</h1>
      <div className="info-section">
        <div className="event-header">
          <img className="event-img" src={currentEvent.imageUrl} />
          <h1>{currentEvent.title}</h1>
          <span className="date">Date: {currentEvent.date}</span>
          {/* <p className="type">{game.category}</p> */}
        </div>
        <p className="text">{currentEvent.description}</p>

        {/* <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {events.comments?.map(x => 
                        <li className="comment">
                            <p>{x}</p>
                        </li>
                    )}
                </ul>

                {!events.comments &&
                    <p className="no-comment">No comments.</p>
                }
            </div> */}

        <div className="buttons">
          <Link to={`/events/${currentEvent._id}/edit`} className="button">
            Edit
          </Link>
          <Link to={`/events/${currentEvent._id}/delete`} className="button">
            Delete
          </Link>
          <Link to="#" className="button">
            Buy
          </Link>
        </div>
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
