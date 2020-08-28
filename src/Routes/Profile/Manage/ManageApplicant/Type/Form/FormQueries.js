import { gql } from "apollo-boost";

export const GET_QUESTION = gql`
  query {
    me {
        isMaster {
            questions {
                id
                subject
                type
                options
            }
        }
    }
  }
`;

// delete question
export const EDIT_QUESTION = gql`
  mutation editQuestion (
    $id: ID!,
    $subject: String,
    $options: [String],
    $action: ACTIONS!
  ) {
      editQuestion (id: $id, subject: $subject, options: $options, action: $action) {
          id
      }
  }
`;

export const CREATE_QUESTION = gql`
  mutation createQuestion (
      $subject: String!,
      $type: TYPE!,
      $options: [String]
  ) {
      createQuestion (subject: $subject, type: $type, options: $options) {
          id
      }
  }
`;