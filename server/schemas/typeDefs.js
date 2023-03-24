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
  }
  type Vehicle {
    _id: ID
    make: String
    model: String
    year: Int
    user: User
  }
  type Auth {
    token: ID!
    user: User
  }
#   Define the queries that will be available to the client
  type Query {
    users: [User]
    user(username: String!): User
    vehicles: [Vehicle]
    vehicle(_id: ID!): Vehicle
    me: User
  }
#   Define the mutations that will be available to the client
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addVehicle(make: String!, model: String!, year: Int!, userId: String): Vehicle
    removeVehicle(_id: ID!): Vehicle
  }
`;
module.exports = typeDefs;