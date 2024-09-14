const Event = require('../models/Event');
const nodemailer = require('nodemailer');

// Create an event
const createEvent = async (req, res) => {
    const { name, description, date } = req.body;
    try {
        const newEvent = new Event({ name, description, date });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: 'Error creating event', error });
    }
};

// Get all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error });
    }
};

// RSVP for an event
const rsvpEvent = async (req, res) => {
    const { eventId } = req.params;
    const { email } = req.body; // Email of the attendee
    try {
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        if (event.attendees.includes(email)) {
            return res.status(400).json({ message: 'Email already RSVP\'d' });
        }

        event.attendees.push(email);
        await event.save();
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ message: 'Error RSVPing', error });
    }
};

// Send a reminder (email notification)
const sendReminder = async (req, res) => {
    const { eventId } = req.params;
    try {
        const event = await Event.findById(eventId);
        const attendees = event.attendees;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        attendees.forEach((email) => {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: `Reminder for ${event.name}`,
                text: `Don't forget about the event: ${event.name} on ${event.date}`,
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });

        res.status(200).json({ message: 'Reminders sent' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending reminders', error });
    }
};

module.exports = { createEvent, getAllEvents, rsvpEvent, sendReminder };
