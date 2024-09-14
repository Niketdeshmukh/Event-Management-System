import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './EventForm.css'; // Import the CSS file

const EventForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const event = { name, description, date };
        try {
            await axios.post('http://localhost:5000/api/event', event);
            alert('Event created!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="event-form-container">
            <h2>Create a New Event</h2>
            <form className="event-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Event Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="input-field"
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="input-field"
                    required
                />
                <button type="submit" className="submit-button">Create Event</button>
            </form>
            <Link to="/events" className="view-events-button">View Events</Link>
        </div>
    );
};

export default EventForm;
