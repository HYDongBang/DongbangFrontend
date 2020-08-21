import React from "react";
import styled from "styled-components";
import styles from "../../Styles/ClubTalk.css";

const Container = styled.div`
  height: 700px;
  width: 100%;
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
  height: 25%;
  padding: 10px 0px;
  flex-direction: row;
`;

const Button = styled.button`
  /* width: 12%;
  border: 0;
  color: white;
  font-weight: 600;
  background-color: ${(props) => props.theme.blueColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  float: right;
  margin-top: 5px; */
`;

const Input = styled.input`
  width: "80%";
`;

export default ({ name, message, onSubmit }) => {
  return (
    <Container>
      <Top>{name}님과의 대화</Top>
      <TalkContainerNoScroll>
        <TalkContainer>
          <MyBubble className="talk other">
            <TopContainer>
              <ClubImg />
              <Name>동아리명</Name>
              <Time>00:00</Time>
            </TopContainer>
            <Context>
              내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말
            </Context>
          </MyBubble>

          <OtherBubble className="talk mine">
            <TopContainer>
              <ClubImg />
              <Name>동아리명</Name>
              <Time>00:00</Time>
            </TopContainer>
            <Context>
              내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말내가한말
            </Context>
          </OtherBubble>
        </TalkContainer>
      </TalkContainerNoScroll>

      <Answer>
        <form onSubmit={onSubmit}>
          <Input type="text" className="form__field" />
          <Button type="submit" className="mybtn mybtn--primary mybtn--inside">
            보내기
          </Button>
        </form>
      </Answer>
    </Container>
  );
};
