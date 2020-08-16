import React from "react";
import styled from "styled-components";
import ClubApply from "./ClupApply";
import ClubTalk from "./ClubTalk";
import ClubActivity from "./ClubActivity";

const Wrapper = styled.div`
  padding-top: 50px;
  height: 800px;
  width: 800px;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  z-index: 100;
  margin: auto;
`;

const ClubContainer = styled.div`
  height: 700px;
  width: 90%;
  margin: 0 auto;
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
  font-weight: 600;
  margin: auto 0 auto 10px;
  font-size: 1.5em;
  min-width: 100px;
  max-width: 200px;
`;

const TopContainer = styled.div`
  max-width: 300px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

const ClubText = styled.div`
  font-size: 0.9em;
  width: 80%;
  min-height: 40px;
  margin: 0 auto;

  text-align: center;
`;

const Context = styled.div`
  padding: 10px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  box-shadow: ${(props) => props.theme.lightGrayShadow};
  border-radius: 10px;
  line-height: 1.4em;
`;

const ContextClubImg = styled.div`
  height: 150px;
  width: 100%;
  border: 1px solid black;
  margin-top: 10px;
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.whiteColor};
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  padding: 14px;
  height: 50px;
  width: 800px;
  position: fixed;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  color: ${(props) => props.theme.blackColor};
  padding-right: 16px;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

export default ({ action, setAction }) => (
  <Wrapper>
    <Header>
      <Menu>
        <Link onClick={() => setAction("clubInfo")}>동아리 소개</Link>
        <Link onClick={() => setAction("activity")}>동아리 활동</Link>
        <Link onClick={() => setAction("talk")}>실시간 톡</Link>
        <Link onClick={() => setAction("apply")}>지원하기</Link>
      </Menu>
    </Header>
    {action === "clubInfo" && (
      <ClubContainer>
        <TopContainer>
          <ClubImg />
          <ClubName>동아리명</ClubName>
        </TopContainer>
        <ClubText>한줄소개</ClubText>
        <Context>
          내용입니다
          <ContextClubImg />
        </Context>
      </ClubContainer>
    )}

    {action === "activity" && <ClubActivity />}

    {action === "talk" && <ClubTalk />}

    {action === "apply" && <ClubApply />}
  </Wrapper>
);
