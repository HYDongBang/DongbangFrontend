import { gql } from "apollo-boost";

export const GET_CLUB_MEMBERS = gql`
    query me {
        me {
          isMaster {
              name
            members {
                id
                Name
                studentNumber
            }
          }
        }
    }
`;