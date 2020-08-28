import { gql } from "apollo-boost";

export const GET_APPLICANTS = gql`
  query me {
    me {
      isMaster {
        questions {
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
            }
            answer
            status
            created
        }
      }
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