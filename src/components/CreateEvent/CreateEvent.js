import "./Create.css"
import { useContext } from "react";
import { eventContext } from "../../context/eventContext"
import * as eventService from "../../services/eventService"

const CreateEvent = () => {
  const { eventAdd } = useContext(eventContext)
  const onSubmit = (e) => {
    e.preventDefault();

    const eventData = Object.fromEntries(new FormData(e.target));

  eventService.create(eventData)
  .then(result => {
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
            type="text"
            id="title"
            name="title"
            placeholder="Enter event title..."
          />
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Enter event date..."
          />
           <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter event city..."
          />
          <label htmlFor="tickets">Tickets:</label>
                <input
                    type="number"
                    id="tickets"
                    name="tickets"
                    min={0}
                    placeholder={1}
                />


          <label htmlFor="event-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />

          <label htmlFor="description">Description:</label>

          <textarea name="description" id="description" defaultValue={"Write description here..."} />

          <input className="btn submit" type="submit" value="Create Event" />
        </div>
      </form>
    </section>
  );
};

export default CreateEvent;
