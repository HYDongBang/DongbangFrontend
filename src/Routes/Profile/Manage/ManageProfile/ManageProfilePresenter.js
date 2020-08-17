import React from "react"
import styled from "styled-components";
import ProfileInput from "../../../../Components/ProfileInput";

const Title = styled.div`
    padding: 20px 0px;
    font-size: 1.7em;
    text-align: center;
`;

const UserImg = styled.div`
    border: 1px solid ${(props) => props.theme.blueGrayColor};
    border-radius: 70px;
    background-color: ${(props) => props.theme.whiteColor};
    height: 70px;
    width: 70px;
    margin: auto;
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
    width: 100px;
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
    email,
    phoneNumber,
    studentNumber,
    uni,
    onSubmit}) => { 
    return ( 
    <>
        <Title>프로필 관리</Title>
        <UserImg></UserImg>
        <form onSubmit={onSubmit}>
            <Questions>
                    <Question>
                        <About>이름</About>
                        <ProfileInput placeholder="ex) 홍길동" {...name} type="text"></ProfileInput>
                    </Question>
                    <Question>
                        <About>이메일</About>
                        <ProfileInput placeholder="ex) abc@gmail.com" {...email} type="email"></ProfileInput>
                    </Question>
                    <Question>
                        <About>휴대폰 번호</About>
                        <ProfileInput placeholder="ex) 010-1234-1234" {...phoneNumber} type="tel"></ProfileInput>
                    </Question>
                    <Question>
                        <About>학번</About>
                        <ProfileInput placeholder="ex) 2017xxxx" {...studentNumber} type="number"></ProfileInput>
                    </Question>
                    <Question>
                        <About>대학 / 학과</About>
                        <ProfileInput placeholder="ex) 한양대학교 컴퓨터소프트웨어학부" {...uni} type="text"></ProfileInput>
                    </Question>
            </Questions>
            <ButtonContainer>
                <Button>저장하기</Button>
            </ButtonContainer>
        </form>
    </>
)
    }