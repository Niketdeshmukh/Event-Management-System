import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventList.css'; // Import the CSS file

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/event');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    const handleDelete = async (eventId) => {
        try {
            await axios.delete(`http://localhost:5000/api/event/${eventId}`);
            setEvents(events.filter(event => event._id !== eventId));
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    return (
        <div className="event-list-container">
            <h2>Event List</h2>
            <div className="event-list">
                {events.length === 0 ? (
                    <p>No events found.</p>
                ) : (
                    events.map(event => (
                        <div key={event._id} className="event-card">
                            <h3>{event.name}</h3>
                            <p>{event.description}</p>
                            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                            <button className="delete-button" onClick={() => handleDelete(event._id)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default EventList;
