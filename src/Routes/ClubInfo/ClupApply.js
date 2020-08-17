import React from "react";
import styled from "styled-components";

const ClubContainer = styled.div`
  padding-top: 50px;
  height: 700px;
  width: 102%;
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
  margin-top: 25px;
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  box-shadow: ${(props) => props.theme.lightGrayShadow};
  border-radius: 10px;
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
  <NoScroll>
    <ClubContainer>
      <ClubImg />

      <Context>
        <ClubName>그리아미 동아리 지원서 </ClubName>
        <ClubText>
          동아리 소개 글 동아리 소개~~~ 동아리 소개 글 동아리 소개~~~ 동아리
          소개 글 동아리 소개~~~ 동아리 소개 글 동아리 소개~~~ 동아리 소개 글
          동아리 소개~~~ 동아리 소개 글 동아리 소개~~~ 동아리 소개 글 동아리
          소개~~~ 동아리 소개 글 동아리 소개~~~ 동아리 소개 글 동아리 소개~~~
        </ClubText>
      </Context>

      <QuestionContainer>
        이름
        <Answer>
          <input
            style={{
              width: "500px",
              padding: "7px 15px",
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
    <Button>보내기</Button>
  </NoScroll>
);
