const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    email: String
    password: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(
      first_name: String
      last_name: String
      email: String
      password: String
    ): Auth
    login(email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
