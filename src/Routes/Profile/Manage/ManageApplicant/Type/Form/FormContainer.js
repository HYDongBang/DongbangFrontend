import React, { useState } from "react";
import FormPresenter from "./FormPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import {toast} from "react-toastify";
import useInput from "../../../../../../Hooks/useInput";
import { GET_QUESTION, EDIT_QUESTION, CREATE_QUESTION } from "./FormQueries";

export default () => {
    const [ number, setNumber ] = useState(1);
    let isFirst = false;
    const getQuestionQuery = useQuery(GET_QUESTION);
    const [ editQuestionMutaion ] = useMutation(EDIT_QUESTION);
    const [ createQuestionMutation ] = useMutation(CREATE_QUESTION);
    const about = useInput("");
    const question = useInput("");
    const option = useInput("");
    const data = [
            {id: "123", subject: "질문1", type: "multiple", options: ["가", "나", "다"]},
            {id: "234", subject: "질문2", type: "single", options: []}
        ]
    if(!getQuestionQuery.loading && isFirst === false) {
        //title.onChange({ target: { value: getQuestionQuery.data.me.isMaster.}})
    }
    isFirst = true;
    

    const onSubmit = async (e) => {
        e.preventDefault();
        toast.info("수정되었습니다.");
    }
    const onDelete = async (id) => {
        if(document.getElementById(id).classList.contains("new")) {
            const parent = document.getElementById(id).parentElement;
            parent.removeChild(parent.childNodes[0]);
            parent.removeChild(parent.childNodes[0]);
        } else if(document.getElementById(id).classList.contains("saved")) {
            document.getElementById(id).parentElement.style.display = "none";
        }
    }
    const onPlus = async () => {
        setNumber(number + 1);
    }
    const onSelect = async (e) => {
        if(e.currentTarget.value === "객관식") {
            console.log(e.currentTarget.getAttribute("id"))
            // saved 인경우
            

            // new 인경우
        } else if(e.currentTarget.value === "주관식") {
            // saved 인경우

            // new 인경우
        }
    }
    return (
        <FormPresenter
            number={number}
            loading={getQuestionQuery.loading}
            about={about}
            question={question}
            option={option}
            data={data}
            onSubmit={onSubmit}
            onDelete={onDelete}
            onPlus={onPlus}
            onSelect={onSelect}
        />
    )
}