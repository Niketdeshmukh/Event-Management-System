const express = require('express');
const { createEvent, getAllEvents, rsvpEvent, sendReminder } = require('../controllers/eventController');
const router = express.Router();

router.post('/', createEvent);           // Create an event
router.get('/', getAllEvents);           // Get all events
router.post('/:eventId/rsvp', rsvpEvent); // RSVP for an event
router.post('/:eventId/reminder', sendReminder); // Send a reminder

module.exports = router;
