import { gql } from "apollo-boost";

export const ME = gql`
  query me {
    me {
      id
      Name
      email
      phoneNumber
      studentNumber
      university
      major
    }
  }
`;

export const EDIT_PROFILE = gql`
  mutation editUser(
      $Name: String
      $phoneNumber: String
      $studentNumber: String
      $university: String
      $major: String
  ) {
      editUser(phoneNumber: $phoneNumber, studentNumber: $studentNumber, Name: $Name, university: $university, major: $major) {
        id
      }
  }
`;