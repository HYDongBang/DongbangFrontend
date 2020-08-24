import React, { useState } from "react";
import ApplicantPresenter from "./ApplicantPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import {  } from "./ApplicantQueries";

export default () => {
    /*

    */
   const applicants = [
       {id: 1, name: "홍길동", studentNumber: "2017011112", application: [{question: "지원동기를 작성해주세요.", answer: "어쩌구ㅇㄹㅇㄹㅇㄹㅇ"}, {question: "q2", answer:"저ㅇㄹ러"}]},
       {id: 2, name: "홍길동", studentNumber: "2017011112", application: [{question: "q1", answer: "어쩌구"}, {question: "q2", answer:"저ㅇㄹ러"}]},
       {id: 3, name: "홍길동", studentNumber: "2017011112", application: [{question: "q1", answer: "어쩌구"}, {question: "q2", answer:"저ㅇㄹ러"}]},
       {id: 4, name: "홍길동", studentNumber: "2017011112", application: [{question: "q1", answer: "어쩌구"}, {question: "q2", answer:"저ㅇㄹ러"}]}
   ];

   const onAccept = async (e) => {
        toast.success("test: 수락하였습니다.");
   }
   const onReject = async (e) => {
        toast.error("test: 거절하였습니다");
   }
   const [id, setId] = useState(0);

   return (
       <ApplicantPresenter
        applicants={applicants}
        onAccept={onAccept}
        onReject={onReject}
        id={id}
        setId={setId}
        />
   );
}