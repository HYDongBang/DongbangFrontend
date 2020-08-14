import React from "react";
import styled from "styled-components";

const ClubContainer = styled.div`
  height: 700px;
  width: 100%;
`;

const ClubImg = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  border-radius: 100%;
`;

const ClubName = styled.div`
  padding-bottom: 5px;
  text-align: center;
`;

const TopContainer = styled.div`
  width: 200px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;
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
`;

//아래 두개는 club apply에서만 사용
const Answer = styled.div`
  width: 100%;
  height: 25%;
  padding: 10px 0px;
`;

const QuestionContainer = styled.div`
  padding: 10px;
  margin-top: 25px;
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  box-shadow: ${(props) => props.theme.lightGrayShadow};
  border-radius: 0px 0px 10px 10px;
`;
export default ({}) => (
  <ClubContainer>
    <TopContainer>
      <ClubImg />
    </TopContainer>

    <Context>
      <ClubName>그리아미</ClubName>
      <ClubText>한줄소개</ClubText>
    </Context>

    <QuestionContainer>
      이름
      <Answer>
        <input
          style={{
            width: "500px",
            padding: "7px 15px",
            border: "1px solid ${(props) => props.theme.blueColor",
          }}
          placeholder="내 답변"
        ></input>
      </Answer>
    </QuestionContainer>

    <QuestionContainer>
      소속학과
      <Answer>
        <input
          style={{
            width: "500px",
            padding: "7px 15px",
            border: "1px solid ${(props) => props.theme.blueColor",
          }}
          placeholder="내 답변"
        ></input>
      </Answer>
    </QuestionContainer>

    <QuestionContainer>
      학번
      <Answer>
        <input
          style={{
            width: "500px",
            padding: "7px 15px",
            border: "1px solid ${(props) => props.theme.blueColor",
          }}
          placeholder="내 답변"
        ></input>
      </Answer>
    </QuestionContainer>

    <QuestionContainer>
      연락처
      <Answer>
        <input
          style={{
            width: "500px",
            padding: "7px 15px",
            border: "1px solid ${(props) => props.theme.blueColor",
          }}
          placeholder="내 답변"
        ></input>
      </Answer>
    </QuestionContainer>
  </ClubContainer>
);
