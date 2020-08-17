import React from "react";
import styled from "styled-components";
import ClubApplyContainer from "./ClubApplyContainer";
import ClubActivity from "./ClubActivity";
import ClubTalkContainer from "./ClubTalkContainer";

const Wrapper = styled.div`
  background: white;
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
  padding: 14px;
  height: 50px;
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

export default ({ action, setAction, id }) => {
  // const { loading, error, data } = useQuery(GET_CLUB, {
  //   variables: { id },
  // });
  const club = {
    id: 1,
    name: "멋쟁이 사자처럼",
    bio: "대충 멋진 한줄소개",
    descirption: "설명 설명 설명",
    logo: "로고",
    clubImage: "이미지",
    applications: ["질문 1", "질문 2"],
    socialUrl: "sns..",
    socialDisplay: "이건 true false",
  };

  return (
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
            <ClubName>{club.name}</ClubName>
          </TopContainer>
          <ClubText>{club.bio}</ClubText>
          <Context>
            {club.descirption}
            <ContextClubImg />
          </Context>
        </ClubContainer>
      )}

      {action === "activity" && <ClubActivity />}
      {/* activity 부분은.. 감이 잘 안온다 sns 크롤링해와서 어떻게 보여지는거지? */}

      {action === "talk" && <ClubTalkContainer name={club.name} />}

      {action === "apply" && (
        <ClubApplyContainer
          name={club.name}
          bio={club.bio}
          applications={club.applications}
        />
      )}
    </Wrapper>
  );
};
