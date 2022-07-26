import { Link } from "react-router-dom";

const CatalogEvent = ({ event }) => {

  return (
    <div className="event-catalog">
      <div className="image-wrap-catalog">
        <img src={event.imageUrl} alt="ev-img" />
      </div>
      <h3>{event.title}</h3>
      <div className="data-buttons">
        <Link to={`/catalog/${event._id}`} className="btn details-btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default CatalogEvent;
