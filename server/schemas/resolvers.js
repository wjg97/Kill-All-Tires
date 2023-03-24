const { AuthenticationError } = require("apollo-server-express");
const { User, Vehicle } = require("../models");
const { signToken } = require("../utils/auth");

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
        // vehicles will return all vehicles and their users
      vehicles: async () => {
        return Vehicle.find().populate("user");
      },
        // vehicle will return the logged in user and their vehicles, otherwise it will return an error
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
                throw new AuthenticationError('No user found with this email address');
              }
        
              const correctPw = await user.isCorrectPassword(password);
        
              if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
              }
        
              const token = signToken(user);
        
              return { token, user };
            },
            // TODO:  In GraphQL server, add vehicle returns error that we must be logged in before adding vehicle.
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
      }
  };
  
  module.exports = resolvers;
  