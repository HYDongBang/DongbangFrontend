import { gql } from "apollo-boost";

export const CLUB_BY_ID = gql`
  query clubById($id: ID!) {
    clubById(id: $id) {
      id
      name
      bio
      description
      type
      logoImage
      clubImage
      application_description

      master {
        id
        Name
      }

      questions {
        id
        subject
        type
        options
      }
      posts {
        id
        title
        content
        created
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
        created
        from {
          id
          Name
        }
        to {
          id
        }
      }
    }
  }
`;

export const SEE_ROOMS = gql`
  query SeeRooms {
    seeRooms {
      id
      messages {
        text
        created
        from {
          id
          Name
        }
        to {
          id
        }
      }
    }
  }
`;

export const ME = gql`
  query me {
    me {
      id
      isMaster {
        id
      }
      rooms {
        id
        participants {
          id
        }
        messages {
          text
        }
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

export const NEW_MESSAGE = gql`
  subscription newMessage($roomId: String!) {
    newMessage(roomId: $roomId) {
      text
      created
      from {
        Name
        id
      }
      to {
        Name
        id
      }
    }
  }
`;

export const EDIT_POST = gql`
  mutation editPost(
    $cid: ID!
    $action: String!
    $content: String!
    $title: String!
    $type: String
  ) {
    editPost(
      cid: $cid
      action: $action
      content: $content
      title: $title
      type: $type
    ) {
      id
    }
  }
`;
