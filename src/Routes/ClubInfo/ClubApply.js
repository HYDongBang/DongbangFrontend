import React from "react";
import Input from "../../Components/Input";
import styled from "styled-components";

const ClubContainer = styled.div`
  height: 700px;
  width: 100%;
  overflow-y: auto;
`;
const NoScroll = styled.div`
  width: 90%;
  overflow-x: hidden;
  margin: 0 auto;
`;

const ClubImg = styled.div`
  height: 150px;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px 10px 0px 0px;
`;

const ClubName = styled.div`
  padding-bottom: 5px;
  text-align: center;
  font-weight: 600;
`;

const ClubText = styled.div`
  font-size: 0.8em;
  text-align: center;
  padding-bottom: 10px;
`;

const Context = styled.div`
  padding: 10px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  box-shadow: ${(props) => props.theme.lightGrayShadow};
  border-radius: 0px 0px 10px 10px;
  line-height: 1.4em;
`;

const Answer = styled.div`
  width: 100%;
  height: 25%;
  padding: 10px 0px;
`;

const QuestionContainer = styled.div`
  padding: 10px;
  margin: 20px 3px 0 3px;
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  box-shadow: ${(props) => props.theme.lightGrayShadow};
  border-radius: 10px;
  text-align: initial;
`;

const Button = styled.button`
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

export default ({ name, bio, applications, answer, onSubmit }) => {
  const questionList = applications.map((question, index) => (
    <QuestionContainer key={index}>
      {question}
      <Answer>
        <Input placeholder={"내 답변"} {...answer} type="text"></Input>
      </Answer>
    </QuestionContainer>
  ));

  return (
    <NoScroll>
      <form onSubmit={onSubmit}>
        <ClubContainer>
          <ClubImg />

          <Context>
            <ClubName>{name} 동아리 지원서 </ClubName>
            <ClubText>{bio}</ClubText>
          </Context>
          {questionList}
        </ClubContainer>
        <Button tpye="submit">보내기</Button>
      </form>
    </NoScroll>
  );
};
