import { gql } from "apollo-boost";

export const GET_CLUBS = gql`
  query {
    allClub {
      id
      name
      type
      bio
      logoImage
    }
  }
`;

export const ME = gql`
  query {
    me {
      notifications {
        created
        content
        checked
      }
    }
  }
`;
