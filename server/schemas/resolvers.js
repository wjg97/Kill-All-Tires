const { AuthenticationError } = require("apollo-server-express");
const { User, Vehicle, Appointment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // users will return all users and their vehicles
    users: async () => {
      return User.find()
        .populate({
          path: "vehicles",
          model: "Vehicle",
        })
        .populate({
          path: "appointments",
          populate: {
            path: "vehicle",
            model: "Vehicle",
          },
        });
    },
    // user will return a single user and their vehicles
    user: async (parent, { userId }) => {
      return await User.findOne({ userId })
        .populate({
          path: "vehicles",
          model: "Vehicle",
        })
        .populate({
          path: "appointments",
          populate: {
            path: "vehicle",
            model: "Vehicle",
          },
        });
    },
    // vehicles will return all vehicles
    vehicles: async () => {
      return Vehicle.find().populate({
        path: "user",
        model: "User"
      });
    },
    // vehicle will return a single vehicle
    vehicle: async (parent, { vehicleId }) => {
      return Vehicle.findOne({ vehicleId }).populate({
        path: "user",
        model: "User"
      });
    },
    // appointments will return all appointments
    appointments: async () => {
      return Appointment.find().populate({
        path: "user",
        model: "User"
      }).populate({
        path: "vehicle",
        model: "Vehicle",
      });
    },
    // appointment will return a single appointment
    appointment: async (parent, { appointmentId }) => {
      return Appointment.findOne({ appointmentId }).populate({
        path: "user",
        model: "User"
      }).populate({
        path: "vehicle",
        model: "Vehicle",
      });
    },
    // me will return a single user and their vehicles
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate({
          path: "vehicles",
          model: "Vehicle",
        }).populate({
          path: "appointments",
          populate: {
            path: "vehicle",
            model: "Vehicle",
          },
        });
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
        const vehicle = await Vehicle.create({
          make,
          model,
          year,
          user: userId,
        });

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
          { $pull: { vehicles: vehicleId } }
        );

        return vehicle;
      }
    },
    // **exhibits error ""message": "Cannot read properties of undefined (reading '_id')""**
    // Issue corrected by changing `vehicleId / userId: context.vehicle._id / user._id,` to `vehicleId, userId`
    addAppointment: async (
      parent,
      { date, time, service, userId, vehicleId },
      context
    ) => {
      if (context.user) {
        // const vehicle = await Vehicle.findOne({vehicleId});
        const appointment = await Appointment.create({
          date,
          time,
          service,
          vehicle: vehicleId,
          user: userId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { appointments: appointment._id } }
        );

        return appointment.populate("user");
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
          { $pull: { appointments: appointmentId } }
        );

        return appointment;
      }
    },
  },
};

module.exports = resolvers;
