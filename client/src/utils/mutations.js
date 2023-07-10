import { gql } from '@apollo/client';


//add new user mutation
export const ADD_NEW_USER = gql`
  mutation addUser($newUsername: String!, $newEmail: String!, $newPassword: String!) {
    addUser(username: $newUsername, email: $newEmail, password: $newPassword) {
      token
      user {
        _id
        username
      }
    }
  }
`;


//login mutation
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

// mutation for adding a new post
export const ADD_POST = gql`
  mutation addPost($postTitle: String!, $postText: String!) {
    addPost(postTitle: $postTitle, postText: $postText) {
      _id
      postTitle
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;


//mutation for getting all posts
export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    allPosts {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

//mutation for adding comments to posts
export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      commentText
      commentAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
