const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    jests: Jest
  }

  type Tasks {
    _id: ID!
    dateCreated: String
    jestTaskDescription: String
    jestsArray: [Jest]
    currentTask: String
  }

  type Jest {
    _id: ID!
    createdBy: [User]
    caption: String
    image: String
    likes: Int
    taskId: Tasks
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
    jests: [Jest]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveJest(jestData: JestInput!): Tasks
    removeJest(jestId: ID!): User
  }
`;

module.exports = typeDefs;
