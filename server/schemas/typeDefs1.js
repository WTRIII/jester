const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    // location: String
    // studentCount: Int
    jests: [Jest] }

  type Jest {
    _id: ID
    name: String
    // building: String
    // creditHours: Int
    task: Task
  }

  type Task {
    _id: ID
    name: String
    // officeHours: String
    // officeLocation: String
    // studentScore: Float
    jests: [Jest]
  }

  type Query {
    users: [User]
    jests: [Jest]
    tasks: [Task]
    class(id: ID!): Class
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new schools
    addSchool(name: String!, location: String!, studentCount: Int!): School
  }
`;

module.exports = typeDefs;


// comparison to activity 9 in section 21
// school = user
// professor = task
// class = jest