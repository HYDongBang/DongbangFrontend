import { gql } from "apollo-boost";

export const ME = gql`
  query me {
    me {
      id
    }
  }
`;

export const GET_PROFILE = gql`
  query userById ($id: String!) {
    userById (id: $id) {
        Name
        email
        phoneNumber
        studentNumber
    }
  }
`;

export const EDIT_PROFILE = gql`
  mutation editUser(
      $Name: String
      $phoneNumber: Int
      $studentNumber: Int
  ) {
      editUser(phoneNumber: $phoneNumber, studentNumber: $studentNumber, Name: $Name) {
        id
      }
  }
`;