import React from "react";
import styled from "styled-components";
import styles from "../../Styles/ClubTalk.css";
import ClubApplyInput from "../../Components/ClubApplyInput";
import InfoButton from "../../Components/InfoButton";

const ClubContainer = styled.div`
  height: 700px;
  width: 90%;
  margin: 0 auto;
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
  overflow: hidden;
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
  display: flex;
  flex-flow: column;
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

const NoApply = styled.div`
  font-size: 1.5em;
  width: 100%;
  text-align: center;
  margin-top: 25%;
  font-weight: bold;
  color: ${(props) => props.theme.grayColor};
`;

export default ({ club, myanswers, onSubmit }) => {
  const questions = club.questions;

  const questionList = questions.map((question, idx) => {
    const optionList = question.options.map((option) => (
      <label style={{ marginBottom: "5px" }}>
        <input
          style={{ marginBottom: "5px" }}
          type="radio"
          name="options"
          value={option}
          onChange={(e) => handleInput(e.target.value)}
        ></input>
        {option}
      </label>
    ));

    const handleInput = (e) => {
      myanswers[idx] = e;
      if (e !== "") {
        console.log(myanswers);
      }
    };

    return (
      <>
        {question.type === "ESSAY" || question.type === "essay" ? (
          <QuestionContainer key={question.id}>
            {question.subject}
            <Answer>
              <ClubApplyInput
                placeholder={"내 답변"}
                type="text"
                key={question.id}
                onChange={(e) => handleInput(e.target.value)}
              ></ClubApplyInput>
            </Answer>
          </QuestionContainer>
        ) : (
          <QuestionContainer key={question.id}>
            {question.subject}
            <Answer>{optionList}</Answer>
          </QuestionContainer>
        )}
      </>
    );
  });

  return (
    <NoScroll>
      <form onSubmit={onSubmit}>
        <ClubContainer>
          <ClubImg>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={club.logoImage}
            ></img>
          </ClubImg>

          <Context>
            <ClubName>{club.name} 동아리 지원서 </ClubName>
            <ClubText>
              {club.application_description == null ? (
                " "
              ) : (
                <>{club.application_description}</>
              )}
            </ClubText>
          </Context>
          {questions.length === 0 ? (
            <NoApply> 지원서가 없습니다</NoApply>
          ) : (
            <>
              {questionList}
              <div style={{ margin: "20px 10px 0 0 " }}>
                <InfoButton tpye="submit" text="보내기" />
              </div>
            </>
          )}
        </ClubContainer>
      </form>
    </NoScroll>
  );
};
