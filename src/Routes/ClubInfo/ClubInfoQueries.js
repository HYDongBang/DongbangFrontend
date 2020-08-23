import { gql } from "apollo-boost";

export const CLUB_BY_ID = gql`
  query clubById($id: ID!) {
    clubById(id: $id) {
      id
      name
      bio
      description
      logo
      master {
        id
      }
      questions {
        id
        subject
        type
        options
      }
    }
  }
`;

export const SEE_ROOM = gql`
  query SeeRoom($clubId: String!) {
    seeRoom(clubId: $clubId) {
      id
      messages {
        text
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($roomId: String, $message: String!, $toId: String!) {
    sendMessage(roomId: $roomId, message: $message, toId: $toId) {
      id
    }
  }
`;

export const CREATE_APPLICATION = gql`
  mutation createApplication($cid: ID!, $answers: [String]!) {
    createApplication(cid: $cid, answers: $answers) {
      id
    }
  }
`;
