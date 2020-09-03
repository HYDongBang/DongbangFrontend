import { gql } from "apollo-boost";

export const GET_APPLICANTS = gql`
  query me {
    me {
      id
      isMaster {
        id
        questions {
            id
            subject
            type
            options
        }
        applications {
            id
            user {
                id
                Name
                studentNumber
                email
                phoneNumber
                university
                major
            }
            answer
            status
            created
        }
      }
    }
  }
`;

export const EDIT_APPLICANTS = gql`
  mutation editApplication ($id: ID!, $action: ACTIONS!) {
    editApplication (id: $id, action: $action) {
      id
    }
  }
`;

export const DELETE_APPLICANTS = gql`
  mutation deleteApplication ($id: ID!) {
      deleteApplication (id: $id) {
          id
      }
  }
`;