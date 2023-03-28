const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
      // users will return all users and their vehicles
      users: async () => {
        return User.find().populate("vehicles");
      },
      // user will return a single user and their vehicles
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate("vehicles");
      },
      // vehicles will return all vehicles
      vehicles: async () => {
        return Vehicle.find();
      },
      // vehicle will return a single vehicle
      vehicle: async (parent, { _id }) => {
        return Vehicle.findOne({ _id });
      },
      // appointments will return all appointments
      appointments: async () => {
        return Appointment.find();
      },
      // appointment will return a single appointment
      appointment: async (parent, { _id }) => {
        return Appointment.findOne({ _id });
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
      // TODO:  In GraphQL server, add vehicle returns error that we must be logged in before adding vehicle. Unsure how to test adding vehicle with user logged in.
      addVehicle: async (parent, { make, model, year }, context) => {
        if (context.user) {
          const vehicle = await Vehicle.create({ make, model, year });
  
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
      addAppointment: async (parent, { date, time, location, notes }, context) => {
        if (context.user) {
          const appointment = await Appointment.create({
            date,
            time,
            vehicle: context.user.vehicles._id,
            user: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { appointments: appointment._id } }
          );
  
          return appointment;
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