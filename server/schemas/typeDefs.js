// gql is a function that will parse a GraphQL schema string
const { gql } = require("apollo-server-express");

// Create our typeDefs
const typeDefs = gql`
# Define the types of data that will be returned from the server
  type User {
    _id: ID
    username: String
    email: String
    password: String
    vehicles: [Vehicle]
    appointments: [Appointment]
  }
  type Vehicle {
    _id: ID
    make: String
    model: String
    year: Int
    user: User
  }
  type Appointment {
    _id: ID
    date: String
    time: String
    service: String
    user: User
    vehicle: Vehicle
  }
  type Auth {
    token: ID!
    user: User
  }
#   Define the queries that will be available to the client
  type Query {
    users: [User]
    user(userId: ID!): User
    vehicles: [Vehicle]
    vehicle(vehicleId: ID!): Vehicle
    appointments: [Appointment]
    appointment(appointmentId: ID!): Appointment
    me: User
  }
#   Define the mutations that will be available to the client
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addVehicle(make: String!, model: String!, year: Int!, userId: ID!): Vehicle
    removeVehicle(vehicleId: ID!): Vehicle
    addAppointment(date: String!, time: String!, service: String!, vehicleId: ID!, userId: ID!): Appointment
    removeAppointment(appointmentId: ID!): Appointment
  }
`;
module.exports = typeDefs;