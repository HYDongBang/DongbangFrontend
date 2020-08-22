import React from "react";
import styled from "styled-components";
import ClubApplyContainer from "./ClubApplyContainer";
import ClubActivity from "./ClubActivity";
import ClubTalkContainer from "./ClubTalkContainer";
import { useQuery } from "react-apollo-hooks";
import { CLUB_BY_ID } from "./ClubInfoQueries";
import Loading from "../../Components/Loading";
import styles from "../../Styles/ClubInfo.css";

const Wrapper = styled.div`
  font-family: "NanumGothic";
  background: white;
`;

const ClubContainer = styled.div`
  height: 700px;
  width: 90%;
  margin: 0 auto;
`;

const ClubImg = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  border-radius: 100%;
`;

const ClubName = styled.div`
  padding-bottom: 5px;
  text-align: center;
  font-weight: 600;
  margin: auto 0 auto 10px;
  font-size: 2em;
  min-width: 100px;
  max-width: 300px;
`;

const TopContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
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
  height: 50px;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
`;

const Link = styled.a``;

export default ({ action, setAction, club }) => {
  const { loading, data } = useQuery(CLUB_BY_ID, {
    variables: { id: club.id },
  });

  return (
    <Wrapper>
      <Header>
        <Menu className="menu__list">
          <Link className="menu__link" onClick={() => setAction("clubInfo")}>
            동아리 소개
          </Link>
          <Link className="menu__link" onClick={() => setAction("activity")}>
            동아리 활동
          </Link>
          <Link className="menu__link" onClick={() => setAction("talk")}>
            실시간 톡
          </Link>
          <Link className="menu__link" onClick={() => setAction("apply")}>
            지원하기
          </Link>
        </Menu>
      </Header>
      {loading && <Loading />}
      {!loading && data.clubById && (
        <>
          {action === "clubInfo" && (
            <>
              <ClubContainer>
                <TopContainer>
                  <ClubImg />
                  <ClubName>{data.clubById.name}</ClubName>
                </TopContainer>
                <ClubText>{data.clubById.bio}</ClubText>
                <Context>
                  {data.clubById.description}
                  <ContextClubImg />
                </Context>
              </ClubContainer>
            </>
          )}
          {action === "activity" && <ClubActivity />}
          {action === "talk" && <ClubTalkContainer club={data.clubById} />}
          {action === "apply" && <ClubApplyContainer club={data.clubById} />}
        </>
      )}
    </Wrapper>
  );
};
