const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    
  }

  type Workout {
    id: ID!
    user: User!
    date: String!
    duration: Int!
    
  }

  type Query {
    users: [User]
    workouts: [Workout]
   
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    
  }

  
`;

module.exports = typeDefs;