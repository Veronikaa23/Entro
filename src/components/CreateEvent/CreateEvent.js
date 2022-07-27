const CreateEvent = () => {
  const onSubmit = (e) => {
    e.preventDefault();
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
          {/* <label htmlFor="levels">MaxLevel:</label>
                <input
                    type="number"
                    id="maxLevel"
                    name="maxLevel"
                    min={1}
                    placeholder={1}
                /> */}

          <label htmlFor="event-img">Image:</label>

          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Description:</label>

          <textarea name="summary" id="summary" defaultValue={""} />

          <input className="btn submit" type="submit" value="Create Event" />
        </div>
      </form>
    </section>
  );
};

export default CreateEvent;
