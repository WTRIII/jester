import { gql } from '@apollo/client';


// =========change======================
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;


// export const QUERY_TASKS = gql`
//   query alltasks{
//     tasks {
//       taskId
//       dateCreated
//       jestTaskDescription
//       currentTask
//       jestsArray {
//         createdBy
//         caption
//         image
//         likes
//       }
    
//     }
//   }
// `;


export const QUERY_TASKS = gql`
query {
  tasks {
    _id
    jestTaskDescription
    currentTask
    jestsArray {
      caption
      image
      likes
    }
  }
}
`;