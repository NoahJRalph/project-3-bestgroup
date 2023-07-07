import { gql } from '@apollo/client';

export const ADD__NEW_USER = gql`
  mutation addUser($new-username: String!, $new-email: String!, $new-password: String!) {
    addUser(username: $new-username, email: $new-email, password: $new-password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
