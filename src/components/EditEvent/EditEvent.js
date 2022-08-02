
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as eventService from '../../services/eventService';
import { eventContext } from "../../context/eventContext";

const EditEvent = () => {
    const [currentEvent, setCurrentEvent] = useState({});
    const { eventEdit } = useContext(eventContext);
    const { eventId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        eventService.getOne(eventId)
            .then(eventData => {
                setCurrentEvent(eventData);
            })
    }, [eventId])

    const onSubmit = (e) => {
        e.preventDefault();

        const eventData = Object.fromEntries(new FormData(e.target));

        eventService.edit(eventId, eventData)
            .then(result => {
                eventEdit(eventId, result);
                navigate(`/catalog`)
            });
    };

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Event</h1>
                    <label htmlFor="ev-title">Event title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentEvent.title} />
                    <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" defaultValue={currentEvent.date} />
                    <label htmlFor="seats">Number of seats:</label>
                    <input
                        type="number"
                        id="seats"
                        name="seats"
                        min={1}
                        defaultValue={currentEvent.seats}
                    />
                    <label htmlFor="event-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentEvent.imageUrl} />
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" defaultValue={currentEvent.description} />
                    <input className="btn submit" type="submit" value="Edit Event" />
                </div>
            </form>
        </section>
    );
}

export default EditEvent;