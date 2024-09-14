// RSVPForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RSVPForm = ({ eventId }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/api/event/${eventId}/rsvp`, { email });
            alert('RSVP successful!');
        } catch (error) {
            console.error('Error RSVPing:', error);
            alert('Error RSVPing');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">RSVP</button>
        </form>
    );
};

export default RSVPForm;
