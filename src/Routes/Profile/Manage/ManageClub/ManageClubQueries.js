import { gql } from "apollo-boost";

export const GET_CLUB = gql`
  query me {
    me {
        isMaster {
          name
          type
          bio
          description
          logo
          clubImage
        }
    }
  }
`;

export const EDIT_CLUB = gql`
  mutation editClub (
      $name: String!
      $type: String!
      $bio: String!
      $description: String
      $logo: String
      $clubImg: String
  ) {
      editUser(name: $name, type: $type, bio: $bio, description: $description, logo: $logo, clubImg: $clubImg)
  }
`;