import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// ============== ^^^^ can stay
//  =====================below must change================
export const SAVE_JEST = gql`
  mutation saveJest($postData: PostInput!) {
    saveJest(postData: $postData) {
      _id
      username
      email
      savedJests {
        jestId
        username
        image
        caption
      }
    }
  }
`;

export const REMOVE_JEST = gql`
  mutation removeJEST($jestId: ID!) {
    removeJest(jestId: $jestId) {
      _id
      username
      email
      savedJests {
        jestId
        username
        image
        caption
      }
    }
  }
`;
