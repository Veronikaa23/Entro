import { useParams } from "react-router-dom";

const DetailsEvent = ({ events }) => {
  const { eventId } = useParams();
  const event = events.find((x) => x._id == eventId);
  console.log(events);
  return (
    <section id="event-details">
      <h1>Event Details</h1>
      <div className="info-section">
        <div className="event-header">
          <img className="event-img" src={event.imageUrl} />
          <h1>{event.title}</h1>
          <span className="date">Date: {event.date}</span>
          {/* <p className="type">{game.category}</p> */}
        </div>
        <p className="text">{event.description}</p>

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
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
          <a href="#" className="button">
            Buy
          </a>
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
