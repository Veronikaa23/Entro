import "./Home.css";
import Spinner from "../Spinner/Spinner";
import { useState, useEffect } from "react";
import LatestEvents from "./LatestEvents/LatestEvents.js";
import * as eventService from "../../services/eventService";

const Home = () => {
  const [sortedEvents, setSortedEvents] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    eventService
      .getSortedEvents()
      .then((result) => {
        setSortedEvents(result);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p> Error: {error} </p>;
  }

  const latestThree = sortedEvents.slice(0, 3);

  return (
    <section id="entro">
      <div className="welcome-message">
        <h3>Welcome to ENTRO</h3>
        <h2>Upcoming events:</h2>

        {latestThree.length > 0 ? (
          latestThree.map((x) => <LatestEvents key={x._id} event={x} />)
        ) : (
          <p className="no-articles">No upcoming events yet</p>
        )}
      </div>
    </section>
  );
};

export default Home;
