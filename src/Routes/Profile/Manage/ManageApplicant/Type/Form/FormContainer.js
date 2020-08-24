import React from "react";
import FormPresenter from "./FormPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import {toast} from "react-toastify";
import useInput from "../../../../../../Hooks/useInput";
import {} from "./FormQueries";

export default () => {
    const title = useInput("");
    const about = useInput("");

    const onSubmit = async (e) => {
        e.preventDefault();
    }
    const onDelete = () => {

    }
    const onPlus = () => {

    }
    return (
        <FormPresenter
            title={title}
            about={about}
            onSubmit={onSubmit}
            onDelete={onDelete}
            onPlus={onPlus}
        />
    )
}