const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    attendees: [{ type: String }],  // List of emails
});

module.exports = mongoose.model('Event', eventSchema);
