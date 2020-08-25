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
  margin: auto 0;
  border: 1px solid black;
  border-radius: 100%;
`;

const ClubName = styled.div`
  text-align: center;
  font-weight: 600;
  word-break: keep-all;
  font-size: 2em;
  padding-top: 5px;
  padding-left: 10px;
  min-width: 100px;
  max-width: 300px;
`;

const TopContainer = styled.div`
  max-width: 200px;
  overflow: visible;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const ClubText = styled.div`
  font-size: 0.9em;
  line-height: 1.3em;
  width: 80%;
  min-height: 30px;
  margin: 0 auto;
  text-align: center;
`;

const Context = styled.div`
  padding: 10px;
  text-align: center;
  line-height: 1.4em;
`;

const ContextClubImg = styled.div`
  height: 250px;
  width: 100%;
  border: 1px solid black;
  margin-bottom: 10px;
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

const Line = styled.div`
  height: 1px;
  width: 80px;
  background-color: black;
  margin: 10px auto;
`;

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
                <Line />

                <Context>
                  <ContextClubImg />
                  {data.clubById.description}
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
