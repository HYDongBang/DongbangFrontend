import { gql } from "apollo-boost";

export const GET_PROFILE = gql`
  query userById ($id: ID!) {
    user(id: $id) {
        name
        email
        phoneNumber
        studentNumber
        uni
    }
  }
`;

export const EDIT_PROFILE = gql`
  mutation editUser(
      $name: String!
      $email: String!
      $phoneNumber: Int!
      $studentNumber: Int!
      $uni: String!
  ) {
      editUser(email: $email, phoneNumber: $phoneNumber, studentNumber: $studentNumber, name: $name)
  }
`;