import React, { useState } from "react"
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Member from "./Type/Member";
import Applicant from "./Type/Applicant";
import Form from "./Type/Form";

const Title = styled.div`
    padding: 30px 0px 30px 0px;
    font-size: 1.7em;
    text-align: center;
    font-family:'NanumGothic';
`;

const Text = styled.div``;

const Line = styled.div`
    height: 1px;
    width: 80px;
    background-color: black;
    margin: 15px auto;
`;

const Contents = styled.div`
    width: 100%;
    height: 700px;
`;

const Menu = styled.div`
    border-bottom: 1px solid ${props => props.theme.grayColor};
    padding: 10px 80px 20px 80px;
    display: flex;
    justify-content: space-between;
`;

const Wrapper = styled.div``;

const styles = {"color": "black"};

const clickstyles = {"color": "#2699FB"};

const Tag = styled.div`
    &:hover {
        color: ${props => props.theme.blueColor};
        transition: all .3s;
    }
`;

export default ({ match }) => {
    const [ state, setState ] = useState("member");
    return ( 
    <>
        <Title>
            <Text>지원자 관리</Text>
            <Line></Line>
        </Title>
        <Contents>
            { state === "member" && (
            <Menu>
                <Link style={clickstyles} onClick={() => setState("member")}to={`${match.url}`}><Tag>멤버 관리</Tag></Link>
                <Link style={styles} onClick={() => setState("applicant")}to={`${match.url}/applicant`}><Tag>지원자 관리</Tag></Link>
                <Link style={styles} onClick={() => setState("application")}to={`${match.url}/form`}><Tag>가입신청 양식</Tag></Link>
            </Menu> )}
            { state === "applicant" && (
            <Menu>
                <Link style={styles} onClick={() => setState("member")}to={`${match.url}`}><Tag>멤버 관리</Tag></Link>
                <Link style={clickstyles} onClick={() => setState("applicant")}to={`${match.url}/applicant`}><Tag>지원자 관리</Tag></Link>
                <Link style={styles} onClick={() => setState("application")}to={`${match.url}/form`}><Tag>가입신청 양식</Tag></Link>
            </Menu> )}
            { state === "application" && (
            <Menu>
                <Link style={styles} onClick={() => setState("member")}to={`${match.url}`}><Tag>멤버 관리</Tag></Link>
                <Link style={styles} onClick={() => setState("applicant")}to={`${match.url}/applicant`}><Tag>지원자 관리</Tag></Link>
                <Link style={clickstyles} onClick={() => setState("application")}to={`${match.url}/form`}><Tag>가입신청 양식</Tag></Link>
            </Menu> )}
            <Wrapper>
                <Route exact path={match.path} component={Member} />
                <Route path={`${match.path}/applicant`} component={Applicant} />
                <Route path={`${match.path}/form`} component={Form} />
            </Wrapper>
        </Contents>
    </>
)
}