import React from "react"
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Member from "./Type/Member";
import Applicant from "./Type/Applicant";
import Form from "./Type/Form";

const Title = styled.div`
    padding: 20px 0px 40px 0px;
    font-size: 1.7em;
    text-align: center;
`;

const Contents = styled.div`
    background-color: ${props => props.theme.grayColor};
    width: 100%;
    height: 700px;
    padding: 25px;
`;

const Menu = styled.div`
    background-color: ${props => props.theme.whiteColor};
    padding: 25px 80px;
    display: flex;
    justify-content: space-between;
`;

const Wrapper = styled.div``;

const styles = {"color": "black"};

export default ({ match }) => ( 
    <>
        <Title>지원자 관리</Title>
        <Contents>
            <Menu>
                <Link style={styles} to={`${match.url}`}>멤버 관리</Link>
                <Link style={styles} to={`${match.url}/applicant`}>지원자 관리</Link>
                <Link style={styles} to={`${match.url}/form`}>가입신청 양식</Link>
            </Menu> 
            <Wrapper>
                <Route exact path={match.path} component={Member} />
                <Route path={`${match.path}/applicant`} component={Applicant} />
                <Route path={`${match.path}/form`} component={Form} />
            </Wrapper>
        </Contents>
    </>
)