const User = require('./User');
const {Vehicle} = require('./Vehicle');
const Appointment = require('./Appointment');

// Appointmentv2 is a copy of Appointment that was created to fall in line with current state of add appointment page. Keeping both copies for now.
const Appointmentv2 = require('./Appointmentv2');

// Export an object containing all of our models
module.exports = { User, Vehicle, Appointment, Appointmentv2 };