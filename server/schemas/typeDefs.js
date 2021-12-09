const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    jests: [Jest]
    
  }

  type Task {
    _id: ID!
    dateCreated: String
    jestTaskDescription: String
    jestsArray: [Jest]
    currentTask: Boolean
  }

  type Jest {
    _id: ID!
    createdBy: User
    caption: String
    image: String
    likes: Int
    taskId: Task
  }

  type Auth {
    token: ID!
    user: User
  }

  input JestInput {
    image: String!
    caption: String!
    
  }
  
 

  type Query {
    user: User
    tasks: [Task]
    allJests: [Jest]
    currentTask: Task
    profile: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveJest(jestData: JestInput!): Task
    removeJest(jestId: ID!): Jest
    newJest(caption: String!, image: String!): Jest
  }
`;

module.exports = typeDefs;
