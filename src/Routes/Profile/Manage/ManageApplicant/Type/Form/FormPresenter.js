import React, { useEffect } from "react";
import styled from "styled-components";
import Textarea from "../../../../../../Components/Textarea";
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
const Option = styled.input`
    
`;
const styles = {"cursor": "pointer"};
const inputStyle = {
    "width": "300px",
    "border": "none",
    "backgroundColor": "#FAFAFA",
    "padding": "5px 10px"}

export default({
    loading,
    about,
    dataset,
    setDataset,
    newdataset,
    setNewdataset,
    onSubmit,
    onDelete,
    onPlus,
    onSelect
}) => {
    const handleInput = (e) => {
        const key = e.target.getAttribute("data-key");
        const value = e.target.value;
        const index = dataset.indexOf(dataset.filter(element => element.id === key)[0]);
        setDataset((prev) => {
            prev[index].subject = value;
            return prev;
        });
        console.log(dataset);
    }
    const handleNewInput = (e) => {
        const key = e.target.getAttribute("data-key");
        const value = e.target.value;
        setNewdataset(prev => {
            prev[key.toString()].subject = value;
            return prev;
        });
        console.log(newdataset);
    }
    return (
    <form onSubmit={onSubmit}>
        {loading && <Loading></Loading>}
        {!loading && (
            <>
            <Wrapper>
                <Textarea placeholder="지원서 내용을 입력하세요." {...about}></Textarea>
                <Questions>
                    {dataset.map(({ id, subject, type, options }) => {
                        return (
                            <Container key={id} id={id}>
                            {type === "SELECT" && (
                                <Question id={id} className="saved">
                                    <input 
                                    placeholder="질문을 입력해주세요." 
                                    name="question" 
                                    value={subject}
                                    onChange={handleInput}
                                    style={inputStyle}
                                    data-key={id}></input>
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
                            {type === "ESSAY" && (
                                <Question id={id} className="saved">
                                    <input 
                                    placeholder="질문을 입력해주세요." 
                                    name="question" 
                                    value={subject}
                                    onChange={handleInput}
                                    style={inputStyle}
                                    data-key={id}></input>
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
                    {newdataset.filter(element => element.state !== "IGNORE").map(({ id, subject, type, options}) => {
                        return (
                            <Container key={id} id={id} className="new">
                                <Question>
                                    <input 
                                    placeholder="질문을 입력해주세요." 
                                    name="question" 
                                    onChange={handleNewInput}
                                    style={inputStyle}
                                    data-key={id}></input>
                                    <Selector>
                                        <Select name="type" id={id} onChange={onSelect}>
                                            <option value="주관식" defaultChecked>주관식</option>
                                            <option value="객관식">객관식</option>
                                        </Select>
                                        <FontAwesomeIcon icon={faTimes} style={styles} onClick={() => onDelete(id)}/>
                                    </Selector>
                                </Question>
                                <Question style={{"display" : "none"}}>
                                    <input 
                                    placeholder="질문을 입력해주세요." 
                                    name="question" 
                                    onChange={handleNewInput}
                                    style={inputStyle}
                                    data-key={id}></input>
                                    <Selector>
                                        <Select name="type" id={id} onChange={onSelect}>
                                            <option value="주관식">주관식</option>
                                            <option value="객관식" defaultChecked>객관식</option>
                                        </Select>
                                        <FontAwesomeIcon icon={faTimes} style={styles} onClick={() => onDelete(id)}/>
                                    </Selector>
                                    <Options>
                                        <Option>

                                        </Option>
                                    </Options>
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
}