import "./Create.css";

import { useContext, useState } from "react";
import { eventContext } from "../../context/eventContext";
import * as eventService from "../../services/eventService";

const CreateEvent = () => {
  const { eventAdd } = useContext(eventContext);

  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [errorDate, setErrorDate] = useState(null);

  const isValidImg = (image) => {
    return /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      image
    );
  };

  const isValidDate = (date) => {
    return new Date(date).getTime() > Date.now();
  };

  const handleChangeImg = (event) => {
    if (!isValidImg(event.target.value)) {
      setError("ImageUrl is invalid");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  const handleChangeDate = (event) => {
    if (!isValidDate(event.target.value)) {
      setErrorDate("Invalid date input");
    } else {
      setErrorDate(null);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (error || errorDate) {
      return true;
    }
    const eventData = Object.fromEntries(new FormData(e.target));

    eventService.create(eventData).then((result) => {
      eventAdd(result);
    });
  };

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={onSubmit}>
        <div className="container">
          <h1>Create Event</h1>
          <label htmlFor="ev-title">Title:</label>
          <input
            required
            type="text"
            id="title"
            name="title"
            placeholder="Enter event title..."
          />
          <label htmlFor="date">Date:</label>
          <input
          required
            type="date"
            id="date"
            name="date"
            placeholder="Enter event date..."
            onChange={handleChangeDate}
          />
          {errorDate && <h2 style={{ color: "red" }}>{errorDate}</h2>}

          <label htmlFor="city">City:</label>
          <input
          required
            type="text"
            id="city"
            name="city"
            placeholder="Enter event city..."
          />
          <label htmlFor="tickets">Tickets:</label>
          <input
          required
            type="number"
            id="tickets"
            name="tickets"
            min={0}
            max={200}
            placeholder={1}
          />

          <label htmlFor="event-img">Image:</label>
          <input
          required
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            value={message}
            onChange={handleChangeImg}
          />
          {error && <h2 style={{ color: "red" }}>{error}</h2>}

          <label htmlFor="description">Description:</label>

          <textarea
          required
            name="description"
            id="description"
            defaultValue={"Write description here..."}
          />

          <input className="btn submit" type="submit" value="Create Event" />
        </div>
      </form>
    </section>
  );
};

export default CreateEvent;
