import React from 'react';
import './EventModal.css'; // Add your CSS for styling the modal

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                <p>Date: {event.date}</p>
            </div>
        </div>
    );
};

export default EventModal;
