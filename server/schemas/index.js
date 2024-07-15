const { gql } = require('apollo-server-express');
const userTypeDefs = require('./users/userTypeDefs');
const userResolvers = require('./users/userResolvers');

// Each additional typeDef and resolver needs to be...
// 1. Imported
// 2. TypeDefs added below the type Mutation{} object (EX: ${userTypeDefs})
// 3. Added to the query object (EX: ...userResolvers.Query)
// 4. Added to the Mutations object (EX: ...userResolvers.Mutation)

const typeDefs = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  ${userTypeDefs}
`;

const resolvers = {
  Query: {
    ...userResolvers.Query,
    // Add other queries here
  },
  Mutation: {
    ...userResolvers.Mutation,
    // Add other mutations here
  },
  // ...other types if needed
};

module.exports = { typeDefs, resolvers };