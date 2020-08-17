import { gql } from "apollo-boost";

export const GET_PROFILE = gql`
  query userById ($id: ID!) {
    user(id: $id) {
        email
        phoneNumber
        studentNumber
        name
        sex
        avatar
        applications
    }
  }
`;

export const EDIT_PROFILE = gql`
  mutation editUser(
      $email: String
      $phoneNumber: Int
      $studentNumber: Int
      $name: String
      $sex: String
      $avatar: String
      $studentName: String
  ) {
      editUser(email: $email, phoneNumber: $phoneNumber, studentNumber: $studentNumber, name: $name, sex: $sex, avatar: $avatar, studentName: $studentName)
  }
`;