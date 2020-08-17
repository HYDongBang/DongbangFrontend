import gql from "apollo-boost";

export const GET_CLUB = gql`
{
    getClub($id: Int!){
        id
        name
        type
        bio
        descirption
        logo
        clubImage
        applications
        socialUrl
        socialDisplay
    }
}
`;

export const GET_CLUBS = gql`
  {
    query {
      id
      logo
      name
      type
    }
  }
`;
