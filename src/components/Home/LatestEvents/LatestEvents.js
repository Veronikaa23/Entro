import { Link } from "react-router-dom";

const LatestEvents = ({ event }) => {
  return (
    <div className="event">
      <div className="image-wrap">
        <img src={event.imageUrl} alt="ev-img" />
      </div>
      <h2>{event.title}</h2>
      <h3>{event.date}</h3>
      <div className="data-buttons">
        <Link to={`/catalog/${event._id}`} className="btn details-btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default LatestEvents;
