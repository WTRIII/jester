const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Tasks {
    _id: ID
    dateCreated: String
    jestTaskDescription: String
    jestsArray: [Jest]
    currentTask: String
  }

  type Jest {
    createdBy: String
    caption: String
    image: String
    likes: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  input JestInput {
    image: String!
    username: String!
    likes: Int
  }

  type Query {
    me: User
    tasks: [Tasks]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveJest(jestData: JestInput!): Tasks
    removeJest(jestId: ID!): User
  }
`;

module.exports = typeDefs;
