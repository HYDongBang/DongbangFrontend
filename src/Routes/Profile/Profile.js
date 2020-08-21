import React, { useState } from "react";
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

const Text = styled.div`
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

export default ({ match }) => {
    const [menu, setMenu] = useState("profile");
    const styles = {"color": "#999999", "padding": "7px"};
    const clickStyle = {"color": "#1D2475", "padding": "7px"};
    return (
        <Wrapper>
        <Menu>
            <Title>
                <Text>MY PAGE</Text>
                <Line></Line>
            </Title>
            { true ? (
            <List>
                { menu === "profile" && (
                    <>
                    <Link style={clickStyle} onClick={() => setMenu("profile")} to={`${match.url}`}>프로필 관리</Link>
                    <Link style={styles} onClick={() => setMenu("club")} to={`${match.url}/club`}>동아리 정보 관리</Link>
                    <Link style={styles} onClick={() => setMenu("applicant")} to={`${match.url}/applicant`}>지원자 관리</Link>
                    </>
                )} 
                { menu === "club" && (
                    <>
                    <Link style={styles} onClick={() => setMenu("profile")} to={`${match.url}`}>프로필 관리</Link>
                    <Link style={clickStyle} onClick={() => setMenu("club")} to={`${match.url}/club`}>동아리 정보 관리</Link>
                    <Link style={styles} onClick={() => setMenu("applicant")} to={`${match.url}/applicant`}>지원자 관리</Link>
                    </>
                )} 
                { menu === "applicant" && (
                    <>
                    <Link style={styles} onClick={() => setMenu("profile")} to={`${match.url}`}>프로필 관리</Link>
                    <Link style={styles} onClick={() => setMenu("club")} to={`${match.url}/club`}>동아리 정보 관리</Link>
                    <Link style={clickStyle} onClick={() => setMenu("applicant")} to={`${match.url}/applicant`}>지원자 관리</Link>
                    </>
                )}
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