const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int  
    savedBooks: [Book]
  }

  type Tasks {
    taskId: ID!
    posts: [Post]
    description: String
    currentTask: Boolean!
  }

  type Auth {
    token: ID!
    user: User
  }

  input PostInput {
    image: String!
    username: String!
    likes: Number
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
