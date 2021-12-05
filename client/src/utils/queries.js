import { gql } from '@apollo/client';


// =========change======================
export const QUERY_ME = gql`
query{
  me {
    taskId
    posts {
      image
      username
      likes
    }
    description
    currentTask
  }
}
`;
