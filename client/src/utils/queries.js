import { gql } from '@apollo/client';


// =========change======================
export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
    }
  }
`;

// this gets all tasks
// should it be written to exclude the current task
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

// need to write this to only get the current task
export const QUERY_CURRENT_TASK = gql`
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

export const QUERY_JESTS = gql`
  query {
    allJests {
      _id
      caption
      image
      likes
  }
}
`;

// export const QUERY_JESTS = gql`
//   query {
//     allJests {
//       _id
//       caption
//       image
//       likes
//     }
//   }
// `;

export const QUERY_PROFILEJESTS = gql`
  query {
    profile {
      _id 
      username
      jests{
        _id
        caption
        image
        likes
      }
    }
  }
`;




// believe we rewrote this query above, but kept this just in case.

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