import { gql } from "apollo-boost";

export const CLUB_BY_ID = gql`
  query clubById($id: ID!) {
    clubById(id: $id) {
      name
      bio
      description
      logo
      questions {
        id
        subject
        type
        options
      }
    }
  }
`;

export const GET_ROOM = gql`
  query GetRoom($id: Int!) {
    getClub(id: $id) {
      id
      writer
      sender
      message
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($writer: String!, $sender: String!, $message: String!) {
    sendMessage(writer: $writer, sender: $sender, message: $message)
  }
`;

export const SEND_APPLICATION = gql`
  mutation sendApplication($answer: String!) {
    sendApplication(answer: $answer)
  }
`;
