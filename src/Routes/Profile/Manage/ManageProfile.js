import React from "react"
import styled from "styled-components";

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
    padding: 15px 0px;
    display: flex;
    align-items: center;
`;

const About = styled.div`
    width: 100px;
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
                        <Answer placeholder={"ex) 홍길동"} {...name} type="text"></Answer>
                    </Question>
                    <Question>
                        <About>이메일</About>
                        <Answer placeholder={"ex) abc@gmail.com"} {...email} type="email"></Answer>
                    </Question>
                    <Question>
                        <About>휴대폰 번호</About>
                        <Answer placeholder={"ex) 010-1234-1234"} {...phoneNumber} type="text"></Answer>
                    </Question>
                    <Question>
                        <About>학번</About>
                        <Answer placeholder={"ex) 2017xxxx"} {...studentNumber} type="text"></Answer>
                    </Question>
                    <Question>
                        <About>대학 / 학과</About>
                        <Answer placeholder={"ex) 한양대학교 컴퓨터소프트웨어학부"} {...uni} type="text"></Answer>
                    </Question>
            </Questions>
            <ButtonContainer>
                <Button>저장하기</Button>
            </ButtonContainer>
        </form>
    </>
)
    }