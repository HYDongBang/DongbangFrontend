import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button";

const Container = styled.div`
  height: 700px;
  width: 100%;
`;
const TalkContainer = styled.div`
  height: 500px;
  width: 100%;
  overflow-y: auto;
`;
const ClubImg = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  border-radius: 100%;
  margin-right: 10px;
`;

const Name = styled.div`
  padding-bottom: 5px;
  text-align: center;
  margin: auto 0;
`;

const Top = styled.div`
  padding-bottom: 5px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 15px;
`;

const TopContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  padding-bottom: 5px;
`;

const Context = styled.div`
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
`;

const MyBubble = styled.div`
  width: 80%;
  position: relative;
  background: #00aabb;
  border-radius: 0.8em;
  margin-left: 5%;
  margin-bottom: 10px;
`;

const OtherBubble = styled.div`
  width: 80%;
  position: relative;
  background: #00aabb;
  border-radius: 0.8em;
  margin: 0 auto 10px auto;
  margin-right: 5%;
  margin-bottom: 10px;
`;

const Answer = styled.div`
  width: 100%;
  height: 25%;
  padding: 10px 0px;
`;

export default ({}) => (
  <Container>
    <Top>000님과의 대화</Top>
    <TalkContainer>
      <MyBubble>
        <TopContainer>
          <ClubImg />
          <Name>동아리명</Name>
        </TopContainer>
        <Context>내가한말</Context>
      </MyBubble>

      <OtherBubble>
        <TopContainer>
          <ClubImg />
          <Name>동아리명</Name>
        </TopContainer>

        <Context>남이 한 말</Context>
      </OtherBubble>

      <MyBubble>
        <TopContainer>
          <ClubImg />
          <Name>동아리명</Name>
        </TopContainer>
        <Context>내가한말</Context>
      </MyBubble>

      <OtherBubble>
        <TopContainer>
          <ClubImg />
          <Name>동아리명</Name>
        </TopContainer>

        <Context>남이 한 말</Context>
      </OtherBubble>
      <MyBubble>
        <TopContainer>
          <ClubImg />
          <Name>동아리명</Name>
        </TopContainer>
        <Context>내가한말</Context>
      </MyBubble>

      <OtherBubble>
        <TopContainer>
          <ClubImg />
          <Name>동아리명</Name>
        </TopContainer>

        <Context>남이 한 말</Context>
      </OtherBubble>

      <MyBubble>
        <TopContainer>
          <ClubImg />
          <Name>동아리명</Name>
        </TopContainer>
        <Context>내가한말</Context>
      </MyBubble>

      <OtherBubble>
        <TopContainer>
          <ClubImg />
          <Name>동아리명</Name>
        </TopContainer>

        <Context>남이 한 말</Context>
      </OtherBubble>
    </TalkContainer>

    <Answer>
      <input
        style={{
          width: "100%",
          height: "100px",
          padding: "7px 15px",
          border: "1px solid ${(props) => props.theme.blueColor",
        }}
        placeholder="내 답변"
      ></input>
      <Button text={"보내기"} />
    </Answer>
  </Container>
);
