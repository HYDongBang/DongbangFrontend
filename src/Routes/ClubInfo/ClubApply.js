import React from "react";
import Input from "../../Components/Input";
import styled from "styled-components";
import styles from "../../Styles/ClubTalk.css";
import Input from "../../Components/Input";

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
  margin-left: 20px;
`;

export default ({ club, answer }) => {
  const questions = club.questions;
  const questionList = questions.map((question) =>
    question.type === "ESSAY" || question.type === "essay" ? (
      <QuestionContainer key={question.id}>
        {question.subject}
        <Answer>
          주관식
          <Input placeholder={"내 답변"} {...answer} type="text"></Input>
        </Answer>
      </QuestionContainer>
    ) : (
      <QuestionContainer key={question.id}>
        {question.subject}
        <Answer>
          객관식
          <Input placeholder={"내 답변"} {...answer} type="text"></Input>
        </Answer>
      </QuestionContainer>
    )
  );

  return (
    <NoScroll>
      <form>
        <ClubContainer>
          <ClubImg />

          <Context>
            <ClubName>{club.name} 동아리 지원서 </ClubName>
            <ClubText>{club.bio}</ClubText>
          </Context>
          {questionList}
        </ClubContainer>
        <Button tpye="submit" className="mybtn mybtn--primary mybtn--inside">
          보내기
        </Button>
      </form>
    </NoScroll>
  );
};
