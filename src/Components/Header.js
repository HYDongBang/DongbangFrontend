import React from "react";
import styled from "styled-components";

const Header = styled.header`
    background-color: ${(props) => props.theme.darkBlueColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    padding: 14px;
    height: 50px;
    width: 100%;
    position: fixed;
`;

const Icon = styled.div`
    color: ${(props) => props.theme.whiteColor};
    font-weight: 700;
    font-size: 18px;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  color: ${(props) => props.theme.whiteColor};
  padding-right: 16px;
`;

// 임의로 div로 넣어둠 나중에 img로 변경
const UserImg = styled.div`
  border: 1px solid ${(props) => props.theme.blueGrayColor};
  border-radius: 30px;
  background-color: ${(props) => props.theme.whiteColor};
  height: 23px;
  width: 23px;
  margin-right: 4px;
`;

const UnderIcon = styled.div`
  background-color: ${(props) => props.theme.whiteColor};
  height: 10px;
  width: 10px;
`;

export default ({isLoggedIn}) => (
    <Header>
        <Icon>ㄷㅂ</Icon>
          { true ? (
              <Menu>
                  <Link href="#">동아리 찾기</Link>
                  <UserImg></UserImg>
                  <UnderIcon></UnderIcon>
              </Menu>
          ) : (
              <Menu>
                  <Link href="#">동아리 찾기</Link>
                  <Link href="#">회원가입</Link>
                  <Link href="#">로그인</Link>
              </Menu>
          ) }
    </Header>
)