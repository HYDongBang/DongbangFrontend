import React, { useState, useEffect } from "react";
import FormPresenter from "./FormPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../../../../../Hooks/useInput";
import Loading from "../../../../../../Components/Loading";
import { GET_QUESTION, EDIT_QUESTION, CREATE_QUESTION, EDIT_CLUB } from "./FormQueries";

export default () => {
    const [dataset, setDataset] = useState([]);
    const [newdataset, setNewdataset] = useState([]);
    const getQuestionQuery = useQuery(GET_QUESTION);
    const [editClubMutation] = useMutation(EDIT_CLUB);
    const [editQuestionMutaion] = useMutation(EDIT_QUESTION);
    const [createQuestionMutation] = useMutation(CREATE_QUESTION);
    const about = useInput("");

    useEffect(() => {
        if (getQuestionQuery.data) {
            const questions = getQuestionQuery.data.me.isMaster.questions;
            questions.forEach(question => {
                setDataset(prev =>
                    prev.concat({
                        id: question.id,
                        subject: question.subject,
                        type: question.type,
                        options: question.options,
                        state: "EDIT"
                    })
                );
            });
            about.setValue(getQuestionQuery.data.me.isMaster.application_description);
        }
    }, [getQuestionQuery.data]);
    if (getQuestionQuery.loading) return <Loading></Loading>;
    const onSubmit = async e => {
        e.preventDefault();
        const isError = false;
        try {
            // 동아리 설명 수정
            const { data } = await editClubMutation({
                variables: {
                    action: "EDIT",
                    application_description: about.value
                }
            });
            if (!data) {
                isError = true;
                console.log("fail to edit club");
            }
            dataset.forEach(async question => {
                // 동아리 지원서 질문 수정
                if (question.state === "EDIT") {
                    const { data } = await editQuestionMutaion({
                        variables: {
                            id: question.id,
                            subject: question.subject,
                            action: question.state
                        }
                    });
                    if (!data) {
                        isError = true;
                    }
                    // 동아리 지원서 질문 삭제
                } else if (question.state === "DELETE") {
                    const { data } = await editQuestionMutaion({
                        variables: {
                            id: question.id,
                            subject: question.subject,
                            action: question.state
                        }
                    });
                    if (!data) {
                        isError = true;
                    }
                }
            });
            newdataset.forEach(async question => {
                // 동아리 지원서 질문 생성
                if (question.state === "CREATE") {
                    const { data } = await createQuestionMutation({
                        variables: {
                            subject: question.subject,
                            type: question.type
                        }
                    });
                    if (!data) {
                        isError = true;
                    }
                }
            });
        } catch (e) {
            console.log(e.message);
        }
        if (isError) {
            toast.error("수정에 실패하였습니다.");
        } else {
            toast.info("수정되었습니다.");
        }
    };
    const onDelete = async currid => {
        if (document.getElementById(currid).classList.contains("new")) {
            const parent = document.getElementById(currid);
            console.log(parent);
            parent.removeChild(parent.childNodes[0]);
            parent.removeChild(parent.childNodes[1]);
            newdataset[currid].state = "IGNORE";
            console.log(newdataset);
        } else if (document.getElementById(currid).classList.contains("saved")) {
            document.getElementById(currid).parentElement.style.display = "none";
            const index = dataset.indexOf(dataset.filter(element => element.id === currid)[0]);
            setDataset(prev => {
                prev[index].state = "DELETE";
                return prev;
            });
        }
    };
    const onPlus = async e => {
        let id = "0";
        if (newdataset.length !== 0) id = newdataset.length.toString();
        setNewdataset(prev => {
            return prev.concat([
                {
                    id: id,
                    subject: "",
                    type: "ESSAY",
                    options: [],
                    state: "CREATE"
                }
            ]);
        });
    };
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
        />
    );
};
