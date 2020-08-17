import gql from "apollo-boost";

export const GET_CLUBS = gql`
  {
    query {
      id
      logo
      name
      type
    }
  }
`;
