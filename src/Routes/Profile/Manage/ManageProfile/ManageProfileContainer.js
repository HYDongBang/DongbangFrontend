import React from "react";
import ManageProfilePresenter from "./ManageProfilePresenter";
import useInput from "../../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { GET_PROFILE, EDIT_PROFILE } from "./ManageProfileQueries";

export default () => {
    /*
    const { profile } = useQuery(GET_PROFILE, {
        variables: {
            id: 
        }
    });
    const name = useInput(profile.user.name);
    const email = useInput(profile.user.email);
    const phoneNumber = useInput(profile.user.phoneNumber);
    const studentNumber = useInput(profile.user.studentNumber);
    const uni = useInput(profile.user.uni);
    const editProfileMutation = useMutation(EDIT_PROFILE, {
        variables: {
            name: name.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            studentNumber: studentNumber.value,
            uni: uni.value
        }
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (name.value !== "" && email.value !== "" && phoneNumber.value !== "" && studentNumber.value !== "" && uni.value !== "") {
            try {
                const {
                    data: { editUser: User }
                } = await editProfileMutation();
                if(!User) {
                    console.log("fail to edit profile");
                } else {
                    toast.success("프로필을 수정하였습니다.");
                }
            }
        }
    }
    */
    const profileData = {
        name: "name",
        email: "email@email",
        phoneNumber: "010-1234-1234",
        studentNumber: "201702020202",
        uni: "한양대학교 학부"
    }
    const name = useInput(profileData.name);
    const email = useInput(profileData.email);
    const phoneNumber = useInput(profileData.phoneNumber);
    const studentNumber = useInput(profileData.studentNumber);
    const uni = useInput(profileData.uni);

    const onSubmit = async (e) => {
        e.preventDefault();
        toast.success("test: 수정완료");
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