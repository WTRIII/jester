const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedPosts: [Post]
  }

  type Tasks {
    taskId: ID!
    posts: [Post]
    description: String
    currentTask: Boolean!
  }

  type Post {
    image: String
    username: String
    likes: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  input PostInput {
    image: String!
    username: String!
    likes: Int
  }

  type Query {
    me: Tasks
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePost(postData: PostInput!): Tasks
    removePost(postId: ID!): User
  }
`;

module.exports = typeDefs;
