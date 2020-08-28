import { gql } from "apollo-boost";

export const GET_CLUB = gql`
  query me {
    me {
        isMaster {
          name
          type
          bio
          description
        }
    }
  }
`;

export const EDIT_CLUB = gql`
  mutation editClub (
      $action: ACTIONS!
      $name: String
      $bio: String
      $description: String
  ) {
      editClub(action: $action, name: $name, bio: $bio, description: $description) {
        name
      }
  }
`;