import React from "react";
import styled from "styled-components";
import FormTitle from "./FormTitle";
import Textarea from "../../../../../../Components/Textarea";
import ProfileInput from "../../../../../../Components/ProfileInput";
import Loading from "../../../../../../Components/Loading";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Wrapper = styled.div`
    margin: 20px 0px;
    padding: 25px;
    height: 560px;
    overflow-y: auto;
    text-align: center;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Title = styled.div`
    padding-bottom: 30px;
`;
const Questions = styled.div`
    padding: 0px 55px;
`;
const Container = styled.div``;
const Line = styled.div`
    background:${props => props.theme.grayColor};
    width: 750px;
    height: 1px;
    margin-top: 20px;
`;
const Question = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    border-left: 3px solid ${props => props.theme.blueColor};
`;
const Selector = styled.div`
    padding-left: 330px;
    display: flex;
    align-items: center;
`;
const Select = styled.select`
    padding: 3px 7px;
    border: 1px solid ${props => props.theme.blueColor};
    font-size: 0.9em;
    color: ${props => props.theme.blueColor};
    cursor: pointer;
    margin-right: 10px;
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
    padding: 30px 0px;
`;
const Text = styled.div`
    padding: 0px 31px 0px 20px;
    font-size: 0.8em;
    color: ${props => props.theme.blueColor};
`;
const Options = styled.div``;
const Option = styled.div``;
const styles = {"cursor": "pointer"};

export default({
    number,
    loading,
    title,
    about,
    data,
    question,
    onSubmit,
    onDelete,
    onPlus,
    onSelect
}) => (
    <form onSubmit={onSubmit}>
        {loading && <Loading></Loading>}
        {!loading && (
            <>
            <Wrapper>
                <Title><FormTitle placeholder="지원서 제목을 입력하세요." {...title}></FormTitle></Title>
                <Textarea placeholder="지원서 내용을 입력하세요." {...about}></Textarea>
                <Questions>
                    {data.map(({ id, subject, type, options }) => {
                        return (
                            <Container>
                            {type === "multiple" && (
                                <Question key={id} id={id} className="saved">
                                    <ProfileInput placeholder="질문을 입력해주세요." name="question" {...question}></ProfileInput>
                                    <Selector>
                                        <Text>객관식</Text>
                                        <FontAwesomeIcon icon={faTimes} style={styles} onClick={() => onDelete(id)}/>
                                    </Selector>
                                    <Options>
                                        <Option>

                                        </Option>
                                    </Options>
                                </Question>
                            )}
                            {type === "single" && (
                                <Question key={id} id={id} className="saved">
                                    <ProfileInput placeholder="질문을 입력해주세요." name="question" {...question}></ProfileInput>
                                    <Selector>
                                        <Text>주관식</Text>
                                        <FontAwesomeIcon icon={faTimes} style={styles} onClick={() => onDelete(id)}/>
                                    </Selector>
                                </Question>
                            )}
                            <Line></Line>
                            </Container>
                        )
                    })}
                    {[...Array(number)].map((n, index) => {
                        return (
                            <Container>
                                <Question key={index} id={index} className="new">
                                    <ProfileInput placeholder="질문을 입력해주세요." name="question" {...question}></ProfileInput>
                                    <Selector>
                                        <Select name="type" id={index} onChange={onSelect}>
                                            <option value="주관식" selected>주관식</option>
                                            <option value="객관식">객관식</option>
                                        </Select>
                                        <FontAwesomeIcon icon={faTimes} style={styles} onClick={() => onDelete(index)}/>
                                    </Selector>
                                </Question>
                                <Question key={index} id={index} className="new" style={{"display" : "none"}}>
                                    <ProfileInput placeholder="질문을 입력해주세요." name="question" {...question}></ProfileInput>
                                    <Selector>
                                        <Select name="type" id={index} onChange={onSelect}>
                                            <option value="주관식">주관식</option>
                                            <option value="객관식" selected>객관식</option>
                                        </Select>
                                        <FontAwesomeIcon icon={faTimes} style={styles} onClick={() => onDelete(index)}/>
                                    </Selector>
                                </Question>
                                <Line></Line>
                            </Container>
                        )
                    })}
                </Questions>
                <Add>
                    <FontAwesomeIcon icon={faPlus} style={styles} onClick={onPlus}/>
                </Add>
            </Wrapper>
            <ButtonContainer>
                <Button>저장하기</Button>
            </ButtonContainer>
            </>
        )}
    </form>
)