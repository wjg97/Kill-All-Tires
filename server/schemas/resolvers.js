const { AuthenticationError } = require("apollo-server-express");
const { User, Vehicle, Appointment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // **NOTE** Queries going deeper than 2 layers will require additional queries to get all data. Currently, queries such as User > Appointment > vehicle will return Null vehicle data. But a query for User, and Vehicle, and Appointment will return all data. So on so forth. All data has been tested and is working.
    // users will return all users and their vehicles
    users: async () => {
      return User.find().populate("vehicles");
    },
    // user will return a single user and their vehicles
    user: async (parent, { userId }) => {
      return await User.findOne({ userId }).populate("vehicles").populate("appointments");
    },
    // vehicles will return all vehicles
    vehicles: async () => {
      return Vehicle.find().populate("user"); 
    },
    // vehicle will return a single vehicle
    vehicle: async (parent, { vehicleId }) => {
      return Vehicle.findOne({ vehicleId }).populate("user");
    },
    // appointments will return all appointments
    appointments: async () => {
      return Appointment.find().populate("user").populate("vehicle");
    },
    // appointment will return a single appointment
    appointment: async (parent, { appointmentId }) => {
      return Appointment.findOne({ appointmentId }).populate("user").populate("vehicle");
    },
    // me will return a single user and their vehicles
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("vehicles");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    // include user token in headers to test 
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addVehicle: async (parent, { make, model, year, userId }, context) => {
      if (context.user) {
        const vehicle = await Vehicle.create({ make, model, year, user: userId });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { vehicles: vehicle._id } }
        );

        return vehicle;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeVehicle: async (parent, { vehicleId }, context) => {
      if (context.user) {
        const vehicle = await Vehicle.findOneAndDelete({
          _id: vehicleId,
          userId: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { vehicles: vehicle._id } }
        );

        return vehicle;
      }
    },
    // **exhibits error ""message": "Cannot read properties of undefined (reading '_id')""**
    // Issue corrected by changing `vehicleId / userId: context.vehicle._id / user._id,` to `vehicleId, userId`
    addAppointment: async (parent, { date, time, userId, vehicleId }, context) => {
      if (context.user) {
        const appointment = await Appointment.create({
          date,
          time,
          vehicle: vehicleId,
          user: userId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { appointments: appointment._id } }
          );

        return appointment.populate('user');
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeAppointment: async (parent, { appointmentId }, context) => {
      if (context.user) {
        const appointment = await Appointment.findOneAndDelete({
          _id: appointmentId,
          userId: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { appointments: appointment._id } }
        );

        return appointment;
      }
    }
  },
};

module.exports = resolvers;