import React from "react";
import MemberPresenter from "./MemberPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { GET_CLUB_MEMBERS, EDIT_CLUB_MEMBERS } from "./MemberQueries";

export default () => {
    let members = [];
    const getClubMemebersQuery = useQuery(GET_CLUB_MEMBERS);
    if(!getClubMemebersQuery.loading) {
        getClubMemebersQuery.data.me.isMaster.members.forEach((element, index) => {
            members.push({Name: element.Name, studentNumber: element.studentNumber, id: element.id})
        })
    }
    /*const editClubMembersMutation = useMutation(EDIT_CLUB_MEMBERs, {
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
    }*/

    const onDelete = async (e) => {
        e.preventDefault();
        alert("탈퇴 시키겠습니까?");
        toast.success("탈퇴 성공");
    }

    return (
        <MemberPresenter 
            loading={getClubMemebersQuery.loading}
            members={members}
            onDelte={onDelete}
        />
    )
}