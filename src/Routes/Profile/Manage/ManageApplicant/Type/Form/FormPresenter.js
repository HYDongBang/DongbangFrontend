import React from "react";
import styled from "styled-components";
import FormTitle from "./FormTitle";
import Textarea from "../../../../../../Components/Textarea";
import ProfileInput from "../../../../../../Components/ProfileInput";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Wrapper = styled.div`
    margin: 20px 0px;
    padding: 25px;
    height: 560px;
    overflow-y: auto;
    text-align: center;
`;
const Title = styled.div`
    padding-bottom: 30px;
`;
const Questions = styled.div`
    padding: 20px 55px;
`;
const Line = styled.div`
    background:${props => props.theme.grayColor};
    width: 750px;
    height: 1px;
    margin-top: 20px;
`;
const Question = styled.div`
    display: flex;
    align-items: center;
    border-left: 3px solid ${props => props.theme.blueColor};
`;
const Selector = styled.div`
    padding-left: 330px;
`;
const Select = styled.select`
    padding: 3px 7px;
    border: 1px solid ${props => props.theme.blueColor};
    font-size: 0.9em;
    color: ${props => props.theme.blueColor};
    cursor: pointer;
    margin-right: 10px;
`;
const Option = styled.option`
`;
const Button = styled.button`
    border: 1px solid ${props => props.theme.darkGrayColor};
    color: ${props => props.theme.darkGrayColor};
    border-radius: 5px;
    padding: 10px 30px;
    background-color: ${props => props.theme.whiteColor};
    margin: 0px auto;
    cursor: pointer;
    &:hover {
        border: 1px solid ${props => props.theme.blueColor};
        background-color: ${props => props.theme.blueColor};
        color: ${props => props.theme.whiteColor};
        transition: 0.3s;
    }
`;
const ButtonContainer = styled.div`
    text-align: center;
`;
const Add = styled.div`
    padding: 15px 0px;
`;
const styles = {"cursor": "pointer"};

export default({
    title,
    about,
    onSubmit
}) => (
    <form onSubmit={onSubmit}>
        <Wrapper>
            <Title><FormTitle placeholder="지원서 제목을 입력하세요." {...title}></FormTitle></Title>
            <Textarea placeholder="지원서 내용을 입력하세요." {...about}></Textarea>
            <Questions>
                <Question>
                    <ProfileInput placeholder="질문을 입력해주세요." name="question"></ProfileInput>
                    <Selector>
                        <Select name="type">
                            <Option value="주관식">주관식</Option>
                            <Option value="객관식">객관식</Option>
                        </Select>
                        <FontAwesomeIcon icon={faTimes} style={styles}/>
                    </Selector>
                </Question>
                <Line></Line>
            </Questions>
            <Add>
                <FontAwesomeIcon icon={faPlus} style={styles}/>
            </Add>
        </Wrapper>
        <ButtonContainer>
            <Button>저장하기</Button>
        </ButtonContainer>
    </form>
)