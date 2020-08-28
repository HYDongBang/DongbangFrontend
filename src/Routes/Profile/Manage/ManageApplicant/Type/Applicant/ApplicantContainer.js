import React, { useState } from "react";
import ApplicantPresenter from "./ApplicantPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { GET_APPLICANTS, DELETE_APPLICANTS } from "./ApplicantQueries";

export default () => {
     const [id, setId] = useState(0);
     const getApplicantsQuery = useQuery(GET_APPLICANTS);
     const [ deleteApplicantsMutation ] = useMutation(DELETE_APPLICANTS);
     const applicants = [
          { id: 1, name: "홍길동", studentNumber: "2017011112", form: [{ question: "지원동기를 작성해주세요.", answer: "어쩌구ㅇㄹㅇㄹㅇㄹㅇ" }, { question: "q2", answer: "저ㅇㄹ러" }] }
     ];

     if(!getApplicantsQuery.loading) {
          const applications = getApplicantsQuery.data.me.isMaster.applications;
          const questions = getApplicantsQuery.data.me.isMaster.questions;
          let num = 0;
          const form = questions.map((question, index) => {
               return { question: question, answer: applications.answer[index]}
          })
          applications.forEach(application => applicants.push({
               id: ++num, 
               name: application.user.Name, 
               studentNumber: application.user.studentNumber,
               form: form
          }));
     }

     const onCheck = async (studentID) => {
          setId(studentID);
     }
     const onAccept = async (e) => {
          toast.success("test: 수락하였습니다.");
     }
     const onReject = async (e) => {
          toast.error("test: 거절하였습니다");
     }

     return (
          <ApplicantPresenter
               loading={getApplicantsQuery.loading}
               applicants={applicants}
               onCheck={onCheck}
               onAccept={onAccept}
               onReject={onReject}
               id={id}
          />
     );
}