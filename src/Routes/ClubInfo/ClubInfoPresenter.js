import React from "react";
import styled from "styled-components";
import ClubApplyContainer from "./ClubApplyContainer";
import ClubActivityContainer from "./ClubActivityContainer";
import ClubTalkContainer from "./ClubTalkContainer";
import MasterTalk from "./MasterRooms";
import { useQuery } from "react-apollo-hooks";
import { CLUB_BY_ID, ME } from "./ClubInfoQueries";
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
  overflow-y: auto;
`;

const ClubImg = styled.div`
  height: 75px;
  width: 75px;
  border: 1px solid ${(props) => props.theme.darkGrayShadow};

  border-radius: 100%;
`;

const ClubName = styled.div`
  font-weight: 600;
  word-break: keep-all;
  font-size: 2em;
  margin-bottom: 6px;
`;
const ClubNameBio = styled.div`
  margin-left: 34px;
  padding-top: 6px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 350px;
  margin: auto;
`;

const ClubText = styled.div`
  font-size: 0.9em;
  line-height: 1.3em;
  width: 80%;
  min-height: 30px;
`;

const Context = styled.div`
  padding: 10px;
  text-align: center;
  line-height: 1.4em;
`;

const ContextClubImg = styled.div`
  height: 250px;
  width: 100%;
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
  height: 70px;
  width: 2px;
  background-color: ${(props) => props.theme.darkGrayColor};
  margin-left: 20px;
`;

const NoPost = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${(props) => props.theme.grayColor};
  margin-top: 55%;
  text-align: center;
`;

export default ({ action, setAction, club }) => {
  const { loading, data } = useQuery(CLUB_BY_ID, {
    variables: { id: club.id },
  });

  const { loading: meLoading, data: meData } = useQuery(ME);
  if (!loading && !meLoading) {
    console.log(meData.me.id);
    console.log(data.clubById.master.id);
  }

  let clubDes;

  if (!loading) {
    const des = data.clubById.description;

    clubDes = des.split("\n").map(function (item, idx) {
      return (
        <span key={idx}>
          {item}
          <br />
        </span>
      );
    });
  }

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
            쪽지
          </Link>
          <Link className="menu__link" onClick={() => setAction("apply")}>
            지원하기
          </Link>
        </Menu>
      </Header>
      {loading && (
        <div style={{ height: "450px" }}>
          <Loading />
        </div>
      )}
      {!loading && data.clubById && !meLoading && (
        <>
          {action === "clubInfo" && (
            <>
              <ClubContainer>
                <TopContainer>
                  <ClubImg>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                      }}
                      src={data.clubById.logoImage}
                    />
                  </ClubImg>
                  <Line />

                  <ClubNameBio>
                    <ClubName>{data.clubById.name}</ClubName>
                    <ClubText>{data.clubById.bio}</ClubText>
                  </ClubNameBio>
                </TopContainer>

                <Context>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      marginBottom: "15px",
                    }}
                    src={data.clubById.clubImage}
                  />

                  {clubDes}
                </Context>
              </ClubContainer>
            </>
          )}
          {action === "activity" && (
            <ClubActivityContainer club={data.clubById} />
          )}

          {action === "talk" && meData.me.isMaster === null && (
            <ClubTalkContainer club={data.clubById} setAction={setAction} />
          )}

          {action === "talk" &&
            meData.me.isMaster !== null &&
            meData.me.id !== data.clubById.master.id && (
              <ClubContainer>
                <NoPost>동아리 계정으로는 쪽지를 보낼 수 없습니다.</NoPost>
              </ClubContainer>
            )}

          {action === "talk" &&
            meData.me.isMaster !== null &&
            meData.me.id === data.clubById.master.id && (
              <MasterTalk club={data.clubById} setAction={setAction} />
            )}

          {action === "apply" && (
            <ClubApplyContainer club={data.clubById} setAction={setAction} />
          )}
        </>
      )}
    </Wrapper>
  );
};
