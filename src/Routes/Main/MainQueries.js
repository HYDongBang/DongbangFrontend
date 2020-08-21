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
