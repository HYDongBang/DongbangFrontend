import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 20px 0px;
    padding: 25px;
    background-color: ${props => props.theme.whiteColor};
    height: 560px;
    overflow-y: auto;
    text-align: center;
`;

const Img = styled.div`
    height: 150px;
    width: 400px;
    background-color: ${props => props.theme.grayColor};
    margin: auto;
`;

const Title = styled.input`
`;

const About = styled.div``;
const Questions = styled.div``;
const Question = styled.div``;

export default() => (
    <Wrapper>
        <Img></Img>
        <input placeholder="지원서 제목을 입력하세요."></input>
        <About></About>
        <Questions>
            <Question></Question>
        </Questions>
    </Wrapper>
)