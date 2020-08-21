import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";

const LOG_IN = gql`
  {
    isLoggedIn @client
  }
`;

const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

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
    box-shadow: ${props => props.theme.darkGrayShadow};
`;

const Icon = styled.div`
  color: ${(props) => props.theme.whiteColor};
  font-weight: 700;
  font-size: 18px;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  margin-right: 35px;
`;

const Text = styled.a`
  color: ${(props) => props.theme.whiteColor};
  padding-left: 10px;
  cursor: pointer;
`;

export default () => {
  const { data: { isLoggedIn } } = useQuery(LOG_IN);
  const [ logOut ] = useMutation(LOG_OUT);
  return (
    <Header>
        <Link to="/">
          <Icon>ㄷㅂ</Icon>
        </Link>
        { isLoggedIn ? (
            <Menu>
                <Link to="/profile"><Text>마이페이지</Text></Link>
                <Text onClick={logOut}>로그아웃</Text>
            </Menu>
        ) : (
            <Menu>
                <Link to = "/auth"><Text>회원가입</Text></Link>
                <Link to ="/auth"><Text>로그인</Text></Link>
            </Menu>
        ) }
    </Header>
  )
};