import React, {useState} from "react";
import MemberPresenter from "./MemberPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { GET_CLUB_MEMBERS, DELETE_CLUB_MEMBER } from "./MemberQueries";

export default () => {
    const [ members, useMembers ] = useState([]);
    const getClubMemebersQuery = useQuery(GET_CLUB_MEMBERS);
    const [ deleteClubMemberMutation ] = useMutation(DELETE_CLUB_MEMBER);
    if(!getClubMemebersQuery.loading && members.length === 0) {
        getClubMemebersQuery.data.me.isMaster.members.forEach((element, index) => {
            useMembers(prev => prev.concat({Name: element.Name, studentNumber: element.studentNumber, id: element.id}));
        })
    }
    const Delete = async (e) => {
        e.preventDefault();
        try {
            const { data: { deleteMember} } = await deleteClubMemberMutation({
                variables: {
                    uid: e.target.getAttribute("data-key")
                }
            });
            if(!deleteMember) {
            console.log("fail to delete")
            } else {
                toast.info("탈퇴하였습니다.");
            }
        } catch (e) {
            console.log(e.message);
        }
        const id = e.currentTarget.getAttribute("data-key");
        useMembers(prev => prev.filter(user => user.id !== id));
    }
    return (
        <MemberPresenter 
            loading={getClubMemebersQuery.loading}
            members={members}
            onDelete={Delete}
        />
    )
}