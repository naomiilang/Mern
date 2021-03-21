import gql from 'graphql-tag';

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
        _idmu
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($id: ID!) {
    addBook(bookId: $id) {
      _id
      username
      book {
        _id
        title
      }
    }
  }
`;

export const REMOVE_BOOK= gql`
  mutation removeBook($id: ID!) {
    removeBook(id: $id) {
      _id
      username
      book {
        _id
        title
      }
    }
  }
`;