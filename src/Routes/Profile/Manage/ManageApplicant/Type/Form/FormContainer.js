import React, { useState } from "react";
import FormPresenter from "./FormPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import {toast} from "react-toastify";
import useInput from "../../../../../../Hooks/useInput";
import { GET_QUESTION, EDIT_QUESTION, CREATE_QUESTION } from "./FormQueries";

export default () => {
    const [ number, setNumber ] = useState(0);
    let isFirst = false;
    const getQuestionQuery = useQuery(GET_QUESTION);
    const [ editQuestionMutaion ] = useMutation(EDIT_QUESTION);
    const [ createQuestionMutation ] = useMutation(CREATE_QUESTION);
    const title = useInput("");
    const about = useInput("");
    const question = useInput("");
    const data = [
            {subject: "질문1", type: "multiple", options: ["가", "나", "다"]},
            {subject: "질문2", type: "single", options: []},
            {subject: "질문3", type: "single", options: []}
        ]
    if(!getQuestionQuery.loading && isFirst === false) {
        
    }
    isFirst = true;
    

    const onSubmit = async (e) => {
        e.preventDefault();
    }
    const onDelete = (e) => {
        
    }
    const onPlus = () => {
        setNumber(number + 1);
    }
    return (
        <FormPresenter
            loading={getQuestionQuery.loading}
            title={title}
            about={about}
            question={question}
            data={data}
            onSubmit={onSubmit}
            onDelete={onDelete}
            onPlus={onPlus}
        />
    )
}