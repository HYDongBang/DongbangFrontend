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
            setDataset(dataset.concat({
            id: question.id,
            subject: question.subject,
            type: question.type,
            options: question.options,
            state: "EDIT"
            }));
        });
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
            document.getElementById(id).parentElement.style.display = "none";
            dataset[id].state = "DELETE";
        }
    }
    const onPlus = async () => {
        let id = "0";
        if(newdataset.length !== 0) id = newdataset.length.toString();
        setNewdataset(prev => {
            console.log(prev.concat([{
                id: id,
                subject: "",
                type: "ESSAY",
                options: [],
                state: "CREATE"
            }]))
             return prev.concat([{
                id: id,
                subject: "",
                type: "ESSAY",
                options: [],
                state: "CREATE"
            }]);
        });
        
    }
    const onSelect = async (e) => {
        if(e.currentTarget.value === "객관식") {
            console.log(e.currentTarget.getAttribute("id"))
            // new 인경우
        } else if(e.currentTarget.value === "주관식") {
            // new 인경우
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