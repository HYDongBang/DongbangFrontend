import React from "react";
import MemberPresenter from "./MemberPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { GET_CLUB_MEMBERS, EDIT_CLUB_MEMBERS } from "./MemberQueries";

export default () => {
    /*
    const { members } = useQuery(GET_CLUB_MEMBERS, {
        variables: {
            id: 
        }
    });
    const editClubMembersMutation = useMutation(EDIT_CLUB_MEMBERs, {
        variables: {
            Users:
        }
    });
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const {
                data: { editClubMembers: result}
            } = await editClubMembersMutation();
        }
        if(!result) {
            console.log("faile to delete")
        } else {
            toast.success("탈퇴하였습니다.");
        }
    }
    */
    const members = [
        {name: "1name", studentNumber: "2017232323"},
        {name: "2name", studentNumber: "2017232323"},
        {name: "3name", studentNumber: "2017232323"},
        {name: "4name", studentNumber: "2017232323"},
        {name: "5name", studentNumber: "2017232323"},
        {name: "1name", studentNumber: "2017232323"},
        {name: "2name", studentNumber: "2017232323"},
        {name: "3name", studentNumber: "2017232323"},
        {name: "4name", studentNumber: "2017232323"},
        {name: "5name", studentNumber: "2017232323"},
        {name: "1name", studentNumber: "2017232323"},
        {name: "2name", studentNumber: "2017232323"},
        {name: "3name", studentNumber: "2017232323"},
        {name: "4name", studentNumber: "2017232323"},
        {name: "5name", studentNumber: "2017232323"}
    ];

    const onSubmit = async (e) => {
        e.preventDefault();
        toast.success("test: 삭제 완료");
    }

    return (
        <MemberPresenter 
            members={members}
            onSubmit={onSubmit}
        />
    )
}