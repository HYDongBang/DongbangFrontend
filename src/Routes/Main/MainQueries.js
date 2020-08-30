import { gql } from "apollo-boost";

export const GET_CLUBS = gql`
  query {
    allClub {
      id
      name
      type
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
