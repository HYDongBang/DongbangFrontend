import React from "react";
import styled from "styled-components";

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
`;

export default ({}) => (
  <Header>
    <Menu>
      <Link onClick={() => setAction("ClubInfo")}>동아리 소개</Link>
      <Link href="#">동아리 활동</Link>
      <Link href="#">실시간 톡</Link>
      <Link href="#">지원하기</Link>
    </Menu>
  </Header>
);
