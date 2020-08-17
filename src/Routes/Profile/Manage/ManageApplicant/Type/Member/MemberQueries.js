import { gql } from "apollo-boost";

export const GET_CLUB_MEMBERS = gql`
    query clubById ($id: ID!) {
        club(id: $id) {
            members
        }
    }
`;

export const EDIT_CLUB_MEMBERS = gql`
    mutation editClubMembers (
        $Users: [User]
    ) {
        editClubMembers(Users: $Users)
    }
`;