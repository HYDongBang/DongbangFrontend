import React from "react";
import styled from "styled-components";
import ProfileInput from "../../../../Components/ProfileInput";

const Title = styled.div`
    padding: 25px 0px;
    font-size: 1.7em;
    text-align: center;
`;

const Questions = styled.div`
`;

const Question = styled.div`
    margin: 25px 0px;
    border-bottom: 1px solid ${props => props.theme.grayColor};
    padding: 15px 0px;
    display: flex;
    align-items: center;
`;

const About = styled.div`
    width: 150px;
    font-weight: 600;
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

export default ({
    name,
    type,
    bio,
    description,
    logo,
    clubImg,
    facebookURL,
    instagramURL,
    onSubmit
}) => (
    <>
        <Title>동아리 정보 관리</Title>
        <form onSubmit={onSubmit}>
            <Questions>
                <Question>
                    <About>동아리 이름</About>
                    <ProfileInput placeholder={"ex) 사랑한대"} {...name}></ProfileInput>
                </Question>
                <Question>
                    <About>동아리 타입</About>
                    <ProfileInput placeholder={"40자 이내로 입력하세요."} {...type}></ProfileInput>
                </Question>
                <Question>
                    <About>동아리 한줄 소개</About>
                    <ProfileInput placeholder={"40자 이내로 입력하세요."} {...bio}></ProfileInput>
                </Question>
                <Question>
                    <About>동아리 설명글</About>
                    <ProfileInput placeholder={"500자 이내로 입력하세요."} {...description}></ProfileInput>
                </Question>
                <Question>
                    <About>동아리 로고</About>
                    <ProfileInput placeholder={"100X100.. png, jpg 형태의 파일을 선택해주세요."} {...logo} type={"file"}></ProfileInput>
                </Question>
                <Question>
                    <About>동아리 대표 이미지</About>
                    <ProfileInput placeholder={"100X100.. png, jpg 형태의 파일을 선택해주세요."} {...clubImg} type={"file"}></ProfileInput>
                </Question>
                <Question>
                    <About>페이스북 주소</About>
                    <ProfileInput placeholder={"동아리 페이스북 주소를 입력해주세요."} {...facebookURL} type={"url"}></ProfileInput>
                </Question>
                <Question>
                    <About>인스타그램 주소</About>
                    <ProfileInput placeholder={"동아리 인스타그램 주소를 입력해주세요."} {...instagramURL} type={"url"}></ProfileInput>
                </Question>
            </Questions>
            <ButtonContainer>
                <Button>저장하기</Button>
            </ButtonContainer>
        </form>
    </>
 )