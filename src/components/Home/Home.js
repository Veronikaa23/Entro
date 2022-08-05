import { useContext } from "react";
import { eventContext } from "../../context/eventContext.js";
import LatestEvents from "./LatestEvents/LatestEvents.js";

const Home = () => {
  const { sortedEvents } = useContext(eventContext);
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
