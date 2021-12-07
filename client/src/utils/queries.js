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
    jestsArray {
      _id
      caption
      image
      likes
      taskId
    }
  }
}
`;

export const QUERY_JESTS = gql`
query {
  tasks {
   
    jestsArray {
      caption
      image
      likes
    }
  }
}
`;