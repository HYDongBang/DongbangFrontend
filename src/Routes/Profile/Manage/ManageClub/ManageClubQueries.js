import { gql } from "apollo-boost";

export const GET_CLUB = gql`
  query clubById ($id: ID!) {
    club(id: $id) {
        name
        type
        bio
        description
        logo
        clubImg
        facebookURL
        instagramURL
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
      $facebookURL: String
      $instagramURL: String
  ) {
      editUser(name: $name, type: $type, bio: $bio, description: $description, logo: $logo, clubImg: $clubImg, facebookURL: $facebookURL, instagramURL: $instagramURL)
  }
`;