import React from 'react'

import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Home.css'
const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleAddEventClick = () => {
        navigate('/create-event'); // Navigate to create-event page
    };

    const handleViewEventsClick = () => {
        navigate('/events'); // Navigate to events page
    };
  return (
    <>
    <div className="home-container">
            <div className="hero-section">
                <h1>Welcome to EventManager</h1>
                <p>Your ultimate solution for managing and organizing events efficiently.</p>
                <button className="cta-button" onClick={handleAddEventClick}>Add Event</button> {/* Add Event button */}
                <button className="cta-button secondary" onClick={handleViewEventsClick}>View Events</button> {/* View Events button */}
            </div>
            <div className="features-section">
                <div className="feature">
                    <h2>Create Events</h2>
                    <p>Easily create and manage events with all the necessary details.</p>
                </div>
                <div className="feature">
                    <h2>RSVP Management</h2>
                    <p>Track attendees and manage RSVPs effortlessly.</p>
                </div>
                <div className="feature">
                    <h2>Send Reminders</h2>
                    <p>Keep your attendees informed with automatic reminders.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home