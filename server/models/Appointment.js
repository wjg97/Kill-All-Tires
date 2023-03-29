const { Schema, model } = require('mongoose');
//const mongoose = require("mongoose");

// Model for an appointment, requiring a date, time, and vehicle ID. Also includes a user ID that will be populated with the user's ID.
const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;