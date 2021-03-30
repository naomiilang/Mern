import gql from 'graphql-tag';

export const QUERY_ME= gql`
  {
    me {
        _id
        username
        email
        savedBooks {
            bookId
            title
            authors
            image
            description
            link
        }
    }
  }
`;
