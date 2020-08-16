import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 700px;
  width: 100%;
`;

const Top = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 1.5em;
  height: 40px;
  padding-top: 7px;
`;

const TalkContainer = styled.div`
  height: 500px;
  width: 102%;
  overflow-y: auto;
`;
const TalkContainerNoScroll = styled.div`
  width: 100%;
  height: 500px;
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
  padding-bottom: 5px;
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
  max-width: 80%;
  min-width: 400px;
  background: white;
  border-radius: 1em 1em 1em 0;
  margin-left: 5%;
  margin-bottom: 10px;
  box-shadow: ${(props) => props.theme.grayColor} 4px 4px 3px;
`;

const OtherBubble = styled.div`
  max-width: 80%;
  min-width: 400px;
  background: #9dd9f3;
  border-radius: 1em 1em 0 1em;
  margin: 0 auto 10px auto;
  margin-right: 5%;
  margin-bottom: 10px;
  box-shadow: ${(props) => props.theme.grayColor} 4px 4px 3px;
`;

const Answer = styled.div`
  width: 100%;
  height: 25%;
  padding: 10px 0px;
  flex-direction: row;
`;
const Button = styled.div`
  width: 12%;
  border: 0;
  color: white;
  font-weight: 600;
  background-color: ${(props) => props.theme.blueColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  float: right;
  margin-top: 5px;
`;

export default ({}) => (
  <Container>
    <Top>000님과의 대화</Top>
    <TalkContainerNoScroll>
      <TalkContainer>
        <MyBubble>
          <TopContainer>
            <ClubImg />
            <Name>동아리명</Name>
            <Time>00:00</Time>
          </TopContainer>
          <Context>
            내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말
          </Context>
        </MyBubble>

        <OtherBubble>
          <TopContainer>
            <ClubImg />
            <Name>동아리명</Name>
            <Time>00:00</Time>
          </TopContainer>

          <Context>
            내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말
          </Context>
        </OtherBubble>

        <MyBubble>
          <TopContainer>
            <ClubImg />
            <Name>동아리명</Name>
          </TopContainer>
          <Context>남이한말ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ</Context>
        </MyBubble>

        <OtherBubble>
          <TopContainer>
            <ClubImg />
            <Name>동아리명</Name>
          </TopContainer>

          <Context>내가한말</Context>
        </OtherBubble>
        <MyBubble>
          <TopContainer>
            <ClubImg />
            <Name>동아리명</Name>
          </TopContainer>
          <Context>남이한말ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ</Context>
        </MyBubble>
      </TalkContainer>
    </TalkContainerNoScroll>

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
      <Button>보내기</Button>
    </Answer>
  </Container>
);
