import React from "react";
import ManageProfilePresenter from "./ManageProfilePresenter";
import useInput from "../../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { ME, GET_PROFILE, EDIT_PROFILE } from "./ManageProfileQueries";

export default () => {
    //const { data }= useQuery(ME);
    //const { data: userById } = useQuery(GET_PROFILE, { variables: { id: "cke4ab04fuvd40a32wb9wms6f" } });
    const [ editProfileMutation ] = useMutation(EDIT_PROFILE);
    const name = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const studentNumber = useInput("");
    const uni = useInput("한양대학교 컴퓨터소프트웨어학부");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await editProfileMutation({
                variables: {
                    Name: name.value,
                    phoneNumber: phoneNumber.value,
                    studentNumber: studentNumber.value,
                }
            });
            if(!data.id) {
                console.error("fail to edit profile");
            } else {
                toast.success("프로필을 수정하였습니다.");
            }
        } catch (e) {
            console.log(e.message);
            toast.error("다시 시도해 주세요");
        }
    }
    return (
    <ManageProfilePresenter 
        name={name}
        email={email}
        phoneNumber={phoneNumber}
        studentNumber={studentNumber}
        uni={uni}
        onSubmit={onSubmit}
    />
    );
};