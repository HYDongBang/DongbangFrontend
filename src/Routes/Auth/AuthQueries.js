import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount($auth: Boolean!, $email: String!, $password: String!) {
    createAccount(auth: $auth, email: $email, password: $password) {
      id
    }
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
