import { gql } from '@apollo/client';


// =========change======================
export const QUERY_ME = gql`
  {
    me {
      _id
      explanation
      currentTask
      posts {
        _id
        authors
        author
        description
        image 
        likes
      }
    }
  }
`;
