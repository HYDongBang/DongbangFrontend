import React, { useState } from "react";
import ProfilePresenter from "./ProfilePresenter";
import useInput from "../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { GET_PROFILE } from "./ProfileQueries";

export default ({ match }) => {
    //const { profile } = useQuery(GET_PROFILE);
    const profileData = {
        name: "name",
        email: "email@email",
        phoneNumber: "010-1234-1234",
        studentNumber: "201702020202",
        uni: "한양대학교 학부"
    }
    const name = useInput(profileData.name);
    const email = useInput(profileData.email);
    const phonenumber = useInput(profileData.phoneNumber);
    const studentNumber = useInput(profileData.studentNumber);
    const uni = useInput(profileData.uni);

    const profile = {name, email, phonenumber, studentNumber, uni};

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(window.location.href);
        console.log(profile.name);
    }
    return <ProfilePresenter match={match} profile={profile} onSubmit={onSubmit}/>;
};