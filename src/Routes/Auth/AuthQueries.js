import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const REQUEST_SECRET = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($email: String!, $getSecret: String!) {
    confirmSecret(email: $email, getSecret: $getSecret)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount($email: String!, $password: String!, $Name: String!, $studentNumber: String!, $phoneNumber: String!, $university: String!, $major: String!) {
    createAccount(email: $email, password: $password, Name: $Name, studentNumber: $studentNumber, phoneNumber: $phoneNumber, university: $university, major: $major) {
      id
    }
  }
`;

export const DELETE_SECRET = gql`
  mutation deleteSecret($email: String!) {
    deleteSecret(email: $email)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
