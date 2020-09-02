import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "../../Styles/ClubTalk.css";
import { useSubscription, useQuery } from "react-apollo-hooks";
import { NEW_MESSAGE, SEE_ROOM } from "./ClubInfoQueries";
import TalkButton from "../../Components/TalkButton";
import Loading from "../../Components/Loading";

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

const TalkContainer = styled.div`
  height: 500px;
  width: 102%;
  overflow-y: auto;
`;
const TalkContainerNoScroll = styled.div`
  width: 100%;
  height: 74%;
  overflow-x: hidden;
`;
const ClubImg = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid black;
  border-radius: 100%;
  margin-right: 10px;
  margin-left: 5px;
`;

const Name = styled.div`
  text-align: center;
  margin: auto 0;
`;

const TopContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;

const Time = styled.div`
  font-size: 0.8em;
  margin: auto 0 auto 10px;
`;

const Context = styled.div`
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  line-height: 1.4em;
  font-size: 0.9em;
`;

const MyBubble = styled.div`
  margin-left: 5%;
  margin-bottom: 10px;
  background-color: #e6e6e6;
  color: #000;
`;

const OtherBubble = styled.div`
  margin: 0 auto 10px auto;
  margin-right: 5%;
  margin-bottom: 10px;
  background-color: #00b0ff;
  color: #fff;
`;

const Answer = styled.div`
  width: 100%;
  height: 20%;
  padding: 10px 0px;
  flex-direction: row;
`;

const Button = styled.button``;

const Input = styled.textarea`
  width: 88%;
`;
const Line = styled.div`
  height: 1px;
  width: 150px;
  background-color: black;
  margin: 5px auto 15px auto;
`;

export default ({ club, message, onSubmit, myChats, chatloading }) => {
  function scrollposition() {
    if (document.getElementById("talk") !== null) {
      let elHeight = document.getElementById("talk").clientHeight;
      if (elHeight != 0) {
        document.getElementById("talk").scrollTop = elHeight;
      }
    }
  }

  return (
    <Container>
      <Top>{club.name}님과의 대화</Top>
      <Line />
      <TalkContainerNoScroll>
        <TalkContainer id="talk">
          {chatloading && <Loading />}
          {!chatloading &&
            myChats &&
            myChats.map((chat) => {
              scrollposition();
              let time = chat.created;
              time = time.toString();
              time = time.substring(11, 16);
              return chat.from.id === club.master.id ? (
                <MyBubble className="talk other">
                  <TopContainer>
                    <ClubImg />
                    <Name>{club.name}</Name>
                    <Time>{time}</Time>
                  </TopContainer>
                  <Context>{chat.text}</Context>
                </MyBubble>
              ) : (
                <OtherBubble className="talk mine">
                  <TopContainer>
                    <ClubImg />
                    <Name>{chat.from.Name}</Name>
                    <Time>{time}</Time>
                  </TopContainer>
                  <Context>{chat.text}</Context>
                </OtherBubble>
              );
            })}
        </TalkContainer>
      </TalkContainerNoScroll>
      <Answer>
        <form onSubmit={onSubmit} style={{ display: "flex" }}>
          <Input className="form__field" {...message} />
          <TalkButton type="submit" text="보내기"></TalkButton>
        </form>
      </Answer>
    </Container>
  );
};

// const { data } = useSubscription(NEW_MESSAGE, {
//   variables: { roomId: myRoomId },
//   shouldResubscribe: true,
// });
// console.log(data);
// subscription 하다 만 거..

// const [myChats, setMyChats] = useState(oldChats||);

// const handleNewChats = () => {
//   if (data !== undefined) {
//     const { newChats } = data;
//     setMyChats((previous) => [...previous, newChats]);
//     console.log("lalala");
//     console.log(myChats);
//   }
// };

// useEffect(() => {
//   handleNewChats();
// }, [data]);

// if (!loading) {
//   console.log("11");

//   console.log(chats);
//   console.log(myChats);
//   console.log(data);
// }
