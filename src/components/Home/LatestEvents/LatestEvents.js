import { Link } from 'react-router-dom';

const LatestEvents = ({
    event
}) => {
    return (
        <div className="event">
          <div className="image-wrap">
            <img src={event.imageUrl} />
          </div>
          <h3>{event.title}</h3>
          <div className="data-buttons">
            <Link to="/" className="btn details-btn">
              Details
            </Link>
          </div>
        </div>
    );
}; 

export default LatestEvents;