import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

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

const Text = styled.div`
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

const iconColor = `${(props) => props.theme.whiteColor}`

export default ({isLoggedIn}) => (
    <Header>
        <Link to="/">
          <Icon>ㄷㅂ</Icon>
        </Link>
        { isLoggedIn ? (
            <Menu>
                <Text href="#">동아리 찾기</Text>
                <UserImg></UserImg>
                <Link to="/profile">
                  <FontAwesomeIcon icon={faSortDown} size="1x" color="white"/>
                </Link>
            </Menu>
        ) : (
            <Menu>
                <Text>동아리 찾기</Text>
                <Text>회원가입</Text>
                <Text>로그인</Text>
            </Menu>
        ) }
    </Header>
)