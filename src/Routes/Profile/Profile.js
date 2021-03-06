import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import ManageProfile from "./Manage/ManageProfile";
import ManageClub from "./Manage/ManageClub";
import ManageApplicant from "./Manage/ManageApplicant";
import { gql } from "apollo-boost";
import Loading from "../../Components/Loading";

export const ME = gql`
  query {
    me {
      id
      isMaster {
        id
      }
    }
  }
`;

const Wrapper = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 90px 30px 30px 30px;
  font-family: "NanumGothic";
`;

const Menu = styled.div`
  width: 200px;
  height: 900px;
  border: 1px solid ${props => props.theme.blueGrayColor};
  padding: 30px;
  margin-right: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${props => props.theme.grayShadow};
`;

const Contents = styled.div`
  width: 1000px;
  min-width: 500px;
  height: 900px;
  border: 1px solid ${props => props.theme.darkGrayColor};
  padding: 50px;
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  padding: 10px 0px 45px 0px;
  color: ${props => props.theme.darkBlueColor};
`;

const Line = styled.div`
  height: 1px;
  width: 70px;
  background-color: ${props => props.theme.darkBlueColor};
  margin: 10px auto;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tag = styled.div`
  position: relative;
  display: block;
  padding: 4px 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;

  &::after {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => props.theme.darkBlueColor};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover {
    color: ${props => props.theme.darkBlueColor};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export default ({ match }) => {
  const href = window.location.href.split("/");
  if (!href[5]) {
    href[5] = "profile";
  }
  const meQuery = useQuery(ME);
  const [menu, setMenu] = useState(href[5]);
  const styles = { color: "#999999", padding: "7px" };
  const clickStyle = { color: "#1D2475", padding: "11px 7px" };
  return (
    <Wrapper>
      <Menu>
        <Title>
          <div>MY PAGE</div>
          <Line></Line>
        </Title>
        {meQuery.loading && <Loading></Loading>}
        {!meQuery.loading && (
          <>
            {meQuery.data.me.isMaster && (
              <List>
                {menu === "profile" && (
                  <>
                    <div style={clickStyle}>프로필 관리</div>
                    <Link style={styles} onClick={() => setMenu("club")} to={`${match.url}/club`}>
                      <Tag>동아리 정보 관리</Tag>
                    </Link>
                    <Link
                      style={styles}
                      onClick={() => setMenu("member")}
                      to={`${match.url}/member`}
                    >
                      <Tag>지원자 관리</Tag>
                    </Link>
                  </>
                )}
                {menu === "club" && (
                  <>
                    <Link style={styles} onClick={() => setMenu("profile")} to={`${match.url}`}>
                      <Tag>프로필 관리</Tag>
                    </Link>
                    <div style={clickStyle}>동아리 정보 관리</div>
                    <Link
                      style={styles}
                      onClick={() => setMenu("member")}
                      to={`${match.url}/member`}
                    >
                      <Tag>지원자 관리</Tag>
                    </Link>
                  </>
                )}
                {menu === "member" && (
                  <>
                    <Link style={styles} onClick={() => setMenu("profile")} to={`${match.url}`}>
                      <Tag>프로필 관리</Tag>
                    </Link>
                    <Link style={styles} onClick={() => setMenu("club")} to={`${match.url}/club`}>
                      <Tag>동아리 정보 관리</Tag>
                    </Link>
                    <div style={clickStyle}>지원자 관리</div>
                  </>
                )}
              </List>
            )}
            {!meQuery.data.me.isMaster && (
              <List>
                <Link style={clickStyle} onClick={() => setMenu("profile")} to={`${match.url}`}>
                  프로필 관리
                </Link>
              </List>
            )}
          </>
        )}
      </Menu>
      <Contents>
        {!meQuery.loading && (
          <>
            {meQuery.data.me.isMaster && (
              <>
                <Route exact path={match.path} component={ManageProfile} />
                <Route path={`${match.path}/club`} component={ManageClub} />
                <Route path={`${match.path}/member`} component={ManageApplicant} />
              </>
            )}
            {!meQuery.data.me.isMaster && (
              <Route exact path={match.path} component={ManageProfile} />
            )}
          </>
        )}
      </Contents>
    </Wrapper>
  );
};
