import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { SEE_ROOMS } from "./ClubInfoQueries";
import Loading from "../../Components/Loading";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MasterRoomContainer from "./MasterRoomContainer";

const Container = styled.div`
  height: 700px;
  width: 90%;
  margin: 0 auto;
`;

const Top = styled.div`
  text-align: center;
  font-size: 1.5em;
  height: 40px;
  padding-top: 7px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Line = styled.div`
  height: 1px;
  width: 150px;
  background-color: black;
  margin: 5px auto 15px auto;
`;

const Line2 = styled.div`
  height: 40px;
  width: 1px;
  background-color: black;
  margin: auto 10px;
`;

const RoomsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomContainer = styled.div`
  box-shadow: ${(props) => props.theme.lightGrayShadow};
  width: 100%;
  height: 80px;
  padding: 10px;
  margin: 0 auto 20px auto;
  display: flex;

  &:hover {
    box-shadow: ${(props) => props.theme.darkGrayShadow};
    cursor: pointer;
  }
`;

const RoomText = styled.div`
  font-weight: bold;
  margin-top: 5px;
`;

const Preview = styled.div`
  margin-top: 10px;
`;

const RoomContext = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export default ({ club, setAction }) => {
  const { loading, data } = useQuery(SEE_ROOMS);
  const [select, setSelect] = useState("");

  let roomArray;
  let rooms;
  if (!loading) {
    rooms = data.seeRooms;
    console.log(club.master.Name);
    roomArray = rooms.map((room, idx) => {
      const len = room.messages.length - 1;
      return (
        <RoomContainer onClick={() => setSelect(idx)}>
          <FontAwesomeIcon
            style={{ margin: "auto 11px" }}
            icon={faUser}
            size="2x"
          />
          <Line2 />
          <RoomContext>
            <RoomText>{room.messages[0].from.Name}과의 대화방</RoomText>
            <Preview>
              {room.messages[len].from.Name !== club.master.Name ? (
                <>{room.messages[len].from.Name}: </>
              ) : (
                <>{club.name}: </>
              )}
              {room.messages[len].text}
            </Preview>
          </RoomContext>
        </RoomContainer>
      );
    });
  }
  return (
    <Container>
      {select === "" ? (
        <>
          <Top>{club.name}동아리 대화방</Top>
          <Line />
          <RoomsContainer>
            {loading ? <Loading /> : <>{roomArray}</>}
          </RoomsContainer>
        </>
      ) : (
        <MasterRoomContainer
          club={club}
          setAction={setAction}
          setSelect={setSelect}
          room={rooms[select]}
        />
      )}
    </Container>
  );
};
