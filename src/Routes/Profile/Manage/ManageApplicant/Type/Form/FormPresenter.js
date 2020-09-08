import React from "react";
import styled from "styled-components";
import Textarea from "../../../../../../Components/Textarea";
import Loading from "../../../../../../Components/Loading";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const Questions = styled.div`
    padding: 0px 55px;
`;
const Container = styled.div``;
const Line = styled.div`
    background: ${props => props.theme.grayColor};
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

const styles = { cursor: "pointer" };
const inputStyle = {
    width: "300px",
    border: "none",
    backgroundColor: "#FAFAFA",
    padding: "5px 10px"
};

export default ({ loading, about, dataset, setDataset, newdataset, setNewdataset, onSubmit, onDelete, onPlus }) => {
    const handleInput = e => {
        const key = e.target.getAttribute("data-key");
        const value = e.target.value;
        const index = dataset.indexOf(dataset.filter(element => element.id === key)[0]);
        setDataset(prev => {
            prev[index].subject = value;
            return prev;
        });
        console.log(dataset);
    };
    const handleNewInput = e => {
        const key = e.target.getAttribute("data-key");
        const value = e.target.value;
        setNewdataset(prev => {
            prev[key.toString()].subject = value;
            return prev;
        });
        console.log(newdataset);
        console.log(dataset);
    };
    return (
        <form onSubmit={onSubmit}>
            <Wrapper>
                <Textarea placeholder="지원서 내용을 입력하세요." {...about}></Textarea>
                <Questions>
                    {dataset.map(({ id, subject, type, options }) => {
                        return (
                            <Container key={id}>
                                {type === "ESSAY" && (
                                    <Question id={id} className="saved">
                                        <input placeholder="질문을 입력해주세요." name="question" value={subject} onChange={handleInput} style={inputStyle} data-key={id}></input>
                                        <Selector>
                                            <Text></Text>
                                            <FontAwesomeIcon icon={faTimes} style={styles} onClick={() => onDelete(id)} />
                                        </Selector>
                                    </Question>
                                )}
                                <Line></Line>
                            </Container>
                        );
                    })}
                    {newdataset
                        .filter(element => element.state !== "IGNORE")
                        .map(({ id, subject, type, options }) => {
                            return (
                                <Container key={id} id={id} className="new">
                                    <Question className="ESSAY">
                                        <input placeholder="질문을 입력해주세요." name="question" onChange={handleNewInput} style={inputStyle} data-key={id}></input>
                                        <Selector>
                                            <div style={{ paddingLeft: "50px" }}></div>
                                            <FontAwesomeIcon icon={faTimes} style={styles} onClick={() => onDelete(id)} />
                                        </Selector>
                                    </Question>

                                    <Line></Line>
                                </Container>
                            );
                        })}
                </Questions>
                <Add>
                    <FontAwesomeIcon icon={faPlus} style={styles} className="Question" onClick={onPlus} />
                </Add>
            </Wrapper>
            <ButtonContainer>
                <Button>저장하기</Button>
            </ButtonContainer>
        </form>
    );
};
