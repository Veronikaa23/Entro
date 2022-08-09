import { useState,useEffect } from "react";
import LatestEvents from "./LatestEvents/LatestEvents.js";
import *  as eventService from "../../services/eventService"

const Home = () => {
  const [sortedEvents, setSortedEvents] = useState([]);
  useEffect(() => {
    eventService.getSortedEvents().then((result) => {
      setSortedEvents(result);
    });
  }, []);

  const latestThree = sortedEvents.slice(0, 3);
 
  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>Welcome to ENTRO</h2>
        <h2>Latest events:</h2>

        {latestThree.length > 0 ? (
          latestThree.map((x) => <LatestEvents key={x._id} event={x} />)
        ) : (
          <p className="no-articles">No events yet</p>
        )}
      </div>
    </section>
  );
};

export default Home;
