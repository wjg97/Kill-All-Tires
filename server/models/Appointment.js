const { Schema, model } = require('mongoose');

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