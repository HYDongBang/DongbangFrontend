import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 700px;
  width: 100%;
  margin-top: 50px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
`;

const ClubContainer = styled.div`
  height: 300px;
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

const Title = styled.div`
  font-size: 1.3em;
  text-align: center;
  padding-bottom: 10px;
`;

const Context = styled.div`
  padding: 10px;
  height: 100px;
  text-align: center;
  border-radius: 0px 0px 10px 10px;
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
  <Container>
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
    <ClubContainer>
      <ClubImg />
      <Title> 활동이름</Title>
      <Context>활동내용</Context>
    </ClubContainer>
  </Container>
);
