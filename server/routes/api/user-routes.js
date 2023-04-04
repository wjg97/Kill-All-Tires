const router = require('express').Router();
const {
    getSingleUser,
    createUser,
    login,
    saveVehicle,
    removeVehicle,
    saveAppointment,
    removeAppointment,
} = require('../../controller/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getSingleUser)
    .post(createUser);

// Set up POST at /api/users/login
router.route('/login').post(login);

// Set up POST and DELETE at /api/users/:userId/vehicles/:vehicleId
router
    .route('/:userId/vehicles/:vehicleId')
    .post(saveVehicle)
    .delete(removeVehicle);

// Set up POST and DELETE at /api/users/:userId/appointments/:appointmentId
router 
    .route('/:userId/appointments/:appointmentId')
    .post(saveAppointment)
    .delete(removeAppointment);

module.exports = router;