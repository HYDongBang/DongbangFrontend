import React, { useEffect } from "react";
import ManageProfilePresenter from "./ManageProfilePresenter";
import useInput from "../../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { ME, EDIT_PROFILE } from "./ManageProfileQueries";

export default () => {
    const meQuery = useQuery(ME);
    const [ editProfileMutation ] = useMutation(EDIT_PROFILE);
    const name = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const studentNumber = useInput("");
    const uni = useInput("");
    const major = useInput("");

        /*name.onChange({ target: { value: meQuery.data.me.Name }});
        email.onChange({ target: { value: meQuery.data.me.email }});
        phoneNumber.onChange({ target: { value: meQuery.data.me.phoneNumber }});
        studentNumber.onChange({ target: { value: meQuery.data.me.studentNumber }});
        uni.onChange({ target: { value: meQuery.data.me.uni }});
        major.onChange({ target: { value: meQuery.data.me.major }});*/

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await editProfileMutation({
                variables: {
                    Name: name.value,
                    phoneNumber: phoneNumber.value,
                    studentNumber: studentNumber.value,
                    uni: uni.value,
                    major: major.value
                }
            });
            if(!data.id) {
                console.error("fail to edit profile");
            } else {
                toast.info("프로필을 수정하였습니다.");
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
        major={major}
        onSubmit={onSubmit}
        loading={meQuery.loading}
    />
    );
};