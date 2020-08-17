import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 20px 0px;
    height: 560px;
    display: flex;
`;

const Applicants = styled.div`
    background-color: ${props => props.theme.whiteColor};
    width: 150px;
    overflow-y: auto;
    height: 560px;
    margin-right: 20px;
`;

const Title = styled.div`
    padding: 5px;
    text-align: center;
    color: ${props => props.theme.blueColor};
    font-size: 0.8em;
`;

const Application = styled.div`
    background-color: ${props => props.theme.whiteColor};
    height: 560px;
    flex: 1;
    overflow-y: auto;
    padding: 20px;
`;

const Member = styled.div`
    border: 1px solid ${props=>props.theme.darkGrayColor};
    margin: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        border: 1px solid ${props=>props.theme.blueColor};
    }
`;

const Img = styled.div`
    background-color: ${props=>props.theme.grayColor};
    width: 36px;
    height: 36px;
`;

const Name = styled.div`
    padding-left: 10px;
`;

const None = styled.div`
    color: ${props => props.theme.grayColor};
    font-weight: 800;
    font-size: 1.5em;
    text-align: center;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonContainer = styled.div`
`;

const Accept = styled.button`
    cursor: pointer;
    border:1px solid ${props => props.theme.darkGrayColor};
    padding: 3px 10px;
    border-radius: 10px;
    margin-left: 10px;
    background-color: ${props => props.theme.whiteColor};
    &:hover {
        color: ${props => props.theme.blueColor};
        border: 1px solid ${props => props.theme.blueColor};
    }
    $:focus {
        border: none;
    }
`;

const Reject = styled.button`
    cursor: pointer;
    border:1px solid ${props => props.theme.darkGrayColor};
    padding: 3px 10px;
    border-radius: 10px;
    margin-left: 10px;
    background-color: ${props => props.theme.whiteColor};
    &:hover {
        color: ${props => props.theme.blueColor};
        border: 1px solid ${props => props.theme.blueColor};
    }
    $:focus {
        border: none;
    }
`;

const Questions = styled.div`
    padding: 10px 0px;
`;

const Question = styled.div`
    border: 1px solid ${props => props.theme.darkGrayColor};
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
`;

const About = styled.div`
    font-weight: 600;
    padding-bottom: 15px;
`;

const Answer = styled.div`
    font-size: 0.9em;
    padding-bottom: 5px;
`;

export default ({ applicants, onAccept, onReject, id, setId }) => (
    <Wrapper>
        <Applicants>
            <Title>지원자</Title>
            {applicants.map(({ id, name }) => {
                return (
                    <Member onClick={() => { setId(id) }}>
                        <Img></Img>
                        <Name>{name}</Name>
                    </Member>
                )
            })}
        </Applicants>
        <Application>
            {id === 0 ? (
                <None>지원자를 선택하세요.</None>
            ) :
            (
                <>
                <Content>
                    <Name>지원자 이름: {applicants.filter(applicant => applicant.id === id)[0].name}</Name>
                    <ButtonContainer>
                        <Accept onClick={onAccept}>수락</Accept>
                        <Reject onClick={onReject}>거절</Reject>
                    </ButtonContainer>
                </Content>
                <Questions>
                    {applicants.filter(applicant => applicant.id === id)[0].application.map(({ question, answer }) => {
                        return (
                            <Question>
                                <About>{question}</About>
                                <Answer>{answer}</Answer>
                            </Question>
                        )
                    })}
                </Questions>
                </>
            )}
        </Application>
    </Wrapper>
)