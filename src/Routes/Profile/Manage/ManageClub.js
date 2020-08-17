import React from "react";
import styled from "styled-components";

const Title = styled.div`
    padding: 25px 0px;
    font-size: 1.7em;
    text-align: center;
`;

const Questions = styled.div`
`;

const Question = styled.div`
    margin: 30px 0px;
    border-bottom: 1px solid ${props => props.theme.grayColor};
    padding: 20px 0px;
    display: flex;
    align-items: center;
`;

const About = styled.div`
    width: 150px;
`;

const Answer = styled.input`
    width: 300px;
    border: none;
    background-color: ${props => props.theme.bgColor};
    padding: 5px 10px;
`;

const ButtonContainer = styled.div`
    padding: 10px 0px;
    text-align: center;
`;

const Button = styled.button`
    border: 1px solid ${props => props.theme.blueColor};
    border-radius: 5px;
    padding: 8px 20px;
    background-color: ${props => props.theme.whiteColor};
    margin: 0px auto;
    cursor: pointer;
`;

export default () => (
    <>
        <Title>동아리 정보 관리</Title>
        <Questions>
            <Question>
                <About>동아리 이름</About>
                <Answer placeholder={"입력하세요"}></Answer>
            </Question>
            <Question>
                <About>동아리 한줄 소개</About>
                <Answer placeholder={"입력하세요"}></Answer>
            </Question>
            <Question>
                <About>동아리 설명글</About>
                <Answer placeholder={"입력하세요"}></Answer>
            </Question>
            <Question>
                <About>동아리 로고</About>
                <Answer placeholder={"입력하세요"}></Answer>
            </Question>
            <Question>
                <About>동아리 대표 이미지</About>
                <Answer placeholder={"입력하세요"}></Answer>
            </Question>
            <Question>
                <About>페이스북 주소</About>
                <Answer placeholder={"입력하세요"}></Answer>
            </Question>
            <Question>
                <About>인스타그램 주소</About>
                <Answer placeholder={"입력하세요"}></Answer>
            </Question>
        </Questions>
        <ButtonContainer>
            <Button>저장하기</Button>
        </ButtonContainer>
    </>
 )