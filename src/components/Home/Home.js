import { useContext } from "react";
import { eventContext } from "../../context/eventContext.js";
import LatestEvents from "./LatestEvents/LatestEvents.js";

const Home = () => {
  const {events} = useContext(eventContext)

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>Welcome to ENTRO</h2>
        <h2>Latest events:</h2>

        {events.length > 0 ? (
          events.map((x) => <LatestEvents key={x._id} event={x} />)
        ) : (
          <p className="no-articles">No events yet</p>
        )}

      </div>
    </section>
  );
};

export default Home;
