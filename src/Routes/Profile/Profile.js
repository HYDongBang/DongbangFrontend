import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import ManageProfile from "./Manage/ManageProfile";
import ManageClub from "./Manage/ManageClub";
import ManageApplicant from "./Manage/ManageApplicant";

const Wrapper = styled.div`
    min-height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 90px 30px 30px 30px;
`;

const Menu = styled.div`
    width: 200px;
    height: 900px;
    background-color: ${props => props.theme.darkBlueColor};
    color: ${props => props.theme.whiteColor};
    padding: 30px;
    margin-right: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Contents = styled.div`
    width: 1000px;
    min-width: 500px;
    height: 900px;
    border: 1px solid ${props => props.theme.grayColor};
    border-radius: 15px;
    box-shadow: ${props => props.theme.lightGrayShadow};
    padding: 50px;
`;

const UserImg = styled.div`
    border: 1px solid ${(props) => props.theme.blueGrayColor};
    border-radius: 70px;
    background-color: ${(props) => props.theme.whiteColor};
    height: 70px;
    width: 70px;
    margin-right: 4px;
`;

const Text = styled.div`
    font-size: 1.2em;
    font-weight: 500;
    padding: 10px 0px 20px 0px;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
`;

const styles = {"color": "#ffffff", "text-align": "center", "padding": "7px"};

export default ({ match }) => {
    return (
        <Wrapper>
        <Menu>
            <UserImg></UserImg>
            <Text>MY PAGE</Text>
            { true ? (
            <List>
                <Link style={styles} to={`${match.url}`}>프로필 관리</Link>
                <Link style={styles} to={`${match.url}/club`}>동아리 정보 관리</Link>
                <Link style={styles} to={`${match.url}/applicant`}>지원자 관리</Link>
            </List>
            ) : ( 
            <List>
                <Link style={styles} to={`${match.url}`}>프로필 관리</Link>
            </List> )}
        </Menu>
        <Contents>
            <Route exact path={match.path} component={ManageProfile}/>
            <Route path={`${match.path}/club`} component={ManageClub} />
            <Route path={`${match.path}/applicant`} component={ManageApplicant} />
        </Contents>
    </Wrapper>
    );
}