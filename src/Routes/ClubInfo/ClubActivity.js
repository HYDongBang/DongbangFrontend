import React from "react";
import styled from "styled-components";

const NoScroll = styled.div`
  width: 90%;
  overflow-x: hidden;
  margin: 0 auto;
`;

const Container = styled.div`
  height: 700px;
  width: 102%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

const ClubContainer = styled.div`
  height: 280px;
  width: 48%;
  overflow: hidden;
  padding: 10px;
  margin: 5px;
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  box-shadow: ${(props) => props.theme.lightGrayShadow};
`;

const ClubImg = styled.div`
  height: 150px;
  width: 100%;
  border: 1px solid black;
`;

const Title = styled.div`
  font-size: 1.3em;
  text-align: center;
  margin-top: 10px;
  font-weight: 600;
`;

const Context = styled.div`
  line-height: 1.4em;
  font-size: 0.8em;
  padding: 10px;
  height: 60px;
  text-align: center;
  border-radius: 0px 0px 10px 10px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
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
  border-radius: 0px 0px 10px 10px;
`;

export default ({}) => (
  <NoScroll>
    <Container>
      <ClubContainer>
        <ClubImg />
        <Title> 활동이름</Title>
        <Context>
          활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용
          활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용활동내용
        </Context>
      </ClubContainer>
      <ClubContainer>
        <ClubImg />
        <Title> 활동이름</Title>
        <Context>활동내용</Context>
      </ClubContainer>
      <ClubContainer>
        <ClubImg />
        <Title> 활동이름</Title>
        <Context>활동내용</Context>
      </ClubContainer>
      <ClubContainer>
        <ClubImg />
        <Title> 활동이름</Title>
        <Context>활동내용</Context>
      </ClubContainer>
      <ClubContainer>
        <ClubImg />
        <Title> 활동이름</Title>
        <Context>활동내용</Context>
      </ClubContainer>
      <ClubContainer>
        <ClubImg />
        <Title> 활동이름</Title>
        <Context>활동내용</Context>
      </ClubContainer>
    </Container>
  </NoScroll>
);
