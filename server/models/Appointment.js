const { Schema, model } = require('mongoose');
//const mongoose = require("mongoose");

// Model for an appointment, requiring a date, time, and vehicle ID. Also includes a user ID that will be populated with the user's ID.
// TODO: Add field for service type, will define once sorted out with front end.
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
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;