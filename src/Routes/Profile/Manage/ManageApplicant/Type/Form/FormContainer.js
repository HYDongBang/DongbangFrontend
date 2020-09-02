import React, { useState } from "react";
import FormPresenter from "./FormPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import {toast} from "react-toastify";
import useInput from "../../../../../../Hooks/useInput";
import { GET_QUESTION, EDIT_QUESTION, CREATE_QUESTION, EDIT_CLUB } from "./FormQueries";

export default () => {
    const [ dataset, setDataset] = useState([]);
    const [ newdataset, setNewdataset ] = useState([]);
    const getQuestionQuery = useQuery(GET_QUESTION);
    const [ editClubMutation ] = useMutation(EDIT_CLUB);
    const [ editQuestionMutaion ] = useMutation(EDIT_QUESTION);
    const [ createQuestionMutation ] = useMutation(CREATE_QUESTION);
    const about = useInput("");

    if(!getQuestionQuery.loading && about.value === "") {
        const questions = getQuestionQuery.data.me.isMaster.questions;
        about.onChange({ target: { value: getQuestionQuery.data.me.isMaster.application_description}});
        questions.forEach(question => {
            setDataset(prev => prev.concat({
            id: question.id,
            subject: question.subject,
            type: question.type,
            options: question.options,
            state: "EDIT"
            }));
        });
        console.log(dataset);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // 동아리 설명 수정
            const {data} = await editClubMutation({
                variables: {
                    action: "EDIT",
                    application_description: about.value
                }
            });
            if(!data) {
                console.log("fail to edit club");
            }
            dataset.forEach(async (question) => {
                console.log(dataset)
                // 동아리 지원서 질문 수정
                if(question.state === "EDIT") {
                    const { data } = await editQuestionMutaion({
                        variables: {
                            id: question.id,
                            subject: question.subject,
                            options: question.options,
                            action: question.state
                        }
                    });
                    if(!data) {
                        toast.error("fail to edit questions");
                    }
                // 동아리 지원서 질문 삭제
                } else if(question.state === "DELETE") {
                    const { data } = await editQuestionMutaion({
                        variables: {
                            variables: {
                                id: question.id,
                                subject: question.subject,
                                options: question.options,
                                action: question.state
                            }
                        }
                    });
                    if(!data) {
                        toast.error("fail to delete questions");
                    }
                }
            });
            newdataset.forEach(async (question) => { 
                console.log(newdataset)
                // 동아리 지원서 질문 생성
                if(question.state === "CREATE") {
                    const { data } = await createQuestionMutation({
                        variables: {
                            subject: question.subject,
                            type: question.type,
                            options: question.options
                        }
                    });
                    if(!data) {
                        toast.error("fail to create questions");
                    }
                }
            });
        } catch (e) {
            console.log(e.message);
        }
        toast.info("수정되었습니다.");
    }
    const onDelete = async (id) => {
        if(document.getElementById(id).classList.contains("new")) {
            const parent = document.getElementById(id); 
            parent.removeChild(parent.childNodes[0]);
            parent.removeChild(parent.childNodes[1]);
            newdataset[id].state = "IGNORE";
        } else if(document.getElementById(id).classList.contains("saved")) {
            console.log(document.getElementById(id).parentElement)
            document.getElementById(id).parentElement.style.display = "none";
            const key = id;
            const index = dataset.indexOf(dataset.filter(element => element.id === key)[0]);
            setDataset((prev) => {
                prev[index].state = "DELETE";
                return prev;
            });
            }
    }
    const onPlus = async (e) => {
        const currId = e.currentTarget.id;
        if(e.currentTarget.classList.contains("Option")){
            setNewdataset(prev => {
                const tmp = prev;
                const options = tmp[currId].options.concat([""]);
                tmp[currId].options = options;
                return tmp;
            })
        }else if(e.currentTarget.classList.contains("Question")) {
            let id = "0";
            if(newdataset.length !== 0) id = newdataset.length.toString();
            setNewdataset(prev => {
                 return prev.concat([{
                    id: id,
                    subject: "",
                    type: "ESSAY",
                    options: [],
                    state: "CREATE"
                }]);
            });
        }
    }
    const onSelect = async (e) => {
        if(e.currentTarget.value === "객관식") {
            document.getElementById(e.currentTarget.id).getElementsByClassName("ESSAY")[0].style.display = "none";
            document.getElementById(e.currentTarget.id).getElementsByClassName("SELECT")[0].style.display = "flex";
            document.getElementById(e.currentTarget.id).getElementsByClassName("SELECT")[1].style.display = "block";
            const id = e.currentTarget.id;
            setNewdataset(prev => {
                prev[id].type = "SELECT";
                return prev
            });
        } else if(e.currentTarget.value === "주관식") {
            document.getElementById(e.currentTarget.id).getElementsByClassName("ESSAY")[0].style.display = "flex";
            document.getElementById(e.currentTarget.id).getElementsByClassName("SELECT")[0].style.display = "none";
            document.getElementById(e.currentTarget.id).getElementsByClassName("SELECT")[1].style.display = "none";
            const id = e.currentTarget.id;
            setNewdataset(prev => {
                prev[id].type = "ESSAY";
                return prev
            });
        }
    }
    return (
        <FormPresenter
            loading={getQuestionQuery.loading}
            about={about}
            dataset={dataset}
            setDataset={setDataset}
            newdataset={newdataset}
            setNewdataset={setNewdataset}
            onSubmit={onSubmit}
            onDelete={onDelete}
            onPlus={onPlus}
            onSelect={onSelect}
        />
    )
}