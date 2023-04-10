const { Schema, model } = require('mongoose');

// Model for an appointment, requiring a date, time, service type and vehicle ID. Also includes a user ID that will be populated with the user's ID.
// This model was created to fall in line with current state of add appointment page. Keeping both copies for now.
const appointmentSchemav2 = new Schema({
    service: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Appointmentv2 = model('Appointmentv2', appointmentSchemav2);

module.exports = Appointmentv2;