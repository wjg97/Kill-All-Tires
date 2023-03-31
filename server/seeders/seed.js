const db = require('../config/connection');
const { Appointment, User, Vehicle  } = require('../models');

const appointmentData = require('./appoinmentData.json');
const userData = require('./userData.json');
const vehicleData = require('./vehicleData.json');

db.once('open', async () => {
    await Appointment.deleteMany({});
    await User.deleteMany({});
    await Vehicle.deleteMany({});

    await Appointment.create(appointmentData);
    await User.create(userData);
    await Vehicle.create(vehicleData);

  console.log('all done!');
  process.exit(0);
});