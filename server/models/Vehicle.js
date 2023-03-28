const { Schema, model } = require('mongoose');

// Model for a vehicle, requiring a make, model, and year.
const vehicleSchema = new Schema({
    make: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280,
    },
    model: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280,
    },
    year: {
        type: Number,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 4,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Vehicle = model('Vehicle', vehicleSchema);

module.exports = Vehicle;