import React from "react";
import styled from "styled-components";
import Loading from "../../../../../../Components/Loading";

const Wrapper = styled.div`
    margin: 20px 0px;
    height: 560px;
    display: flex;
`;

const Applicants = styled.div`
    width: 180px;
    overflow-y: auto;
    height: 560px;
    border-right: 1px solid ${props=>props.theme.grayColor};
`;

const Title = styled.div`
    padding-bottom: 8px;
    text-align: center;
    color: ${props => props.theme.darkGrayColor};
    font-size: 0.8em;
`;

const Application = styled.div`
    height: 560px;
    flex: 1;
    overflow-y: auto;
    padding: 20px;
`;

const Member = styled.div`
    border-left: 3px solid ${props=>props.theme.darkGrayColor};
    margin: 10px 0px 10px 10px;
    padding: 5px 5px 5px 7px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        border-left: 3px solid ${props=>props.theme.blueColor};
    }
`;

const Name = styled.div`
    font-size: 0.9em;
    font-weight: 600;
    padding-right: 3px;
`;

const Number = styled.div`
    padding: 3px 0px 3px 10px;
    font-size: 0.8em;
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
        transition: all .3s;
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
        transition: all .3s;
    }
    $:focus {
        border: none;
    }
`;

const Questions = styled.div`
    padding: 10px 0px;
`;

const Question = styled.div`
    border-top: 1px solid ${props => props.theme.grayColor};
    margin: 5px;
    padding: 20px 0px 10px 0px;
`;

const About = styled.div`
    font-weight: 600;
    padding-bottom: 15px;
`;

const Answer = styled.div`
    font-size: 0.9em;
    padding-bottom: 5px;
`;

export default ({ loading, applicants, onCheck, onAccept, onReject, id}) => (
    <>
    {loading && <Loading></Loading>}
    {!loading && (
        <Wrapper>
            <Applicants>
                <Title>지원자</Title>
                {applicants.map(({ id, name, studentNumber }) => {
                    return (
                        <Member onClick={() => onCheck(id)}>
                            <Name>{name}</Name>
                            <Number>{studentNumber}</Number>
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
                        {applicants.filter(applicants => applicants.id === id)[0].form.map(({ question, answer }) => {
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
    )}
    </>
)