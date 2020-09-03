import React, { useState, useEffect } from "react";
import ApplicantPresenter from "./ApplicantPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { GET_APPLICANTS, EDIT_APPLICANTS, DELETE_APPLICANTS } from "./ApplicantQueries";

export default () => {
     const [id, setId] = useState("0");
     const getApplicantsQuery = useQuery(GET_APPLICANTS);
     const [ deleteApplicantsMutation ] = useMutation(DELETE_APPLICANTS);
     const [ editApplicationsMutation ] = useMutation(EDIT_APPLICANTS);
     const applicants = [];

     useEffect( () => {
          if(id !== "0") {
               edit();
          }
     }, [id]);

     if(!getApplicantsQuery.loading) {
          const applications = getApplicantsQuery.data.me.isMaster.applications;
          const questions = getApplicantsQuery.data.me.isMaster.questions;
          applications.forEach(application => applicants.push({
               id: application.id, 
               name: application.user.Name, 
               studentNumber: application.user.studentNumber,
               email: application.user.email,
               phoneNumber: application.user.phoneNumber,
               sex: application.user.sex,
               university: application.user.university,
               major: application.user.major,
               form: questions.map((question, index) => {
                    console.log(question)
                    return { id: index, question: question.subject, type: question.type, options: question.options, answer: application.answer[index]}
               }),
               status: application.status
          }));
     }
     const edit = async() => {
          try {
               const { data } = await editApplicationsMutation({
                    variables: {
                         id: id,
                         action: "CHECK"
                    }
               });
               if(!data) {
                    console.error("fail to edit application");
               }
          } catch (e) {
               console.log(e.message);
               toast.error("다시 시도해 주세요");
          }
     }
     const onCheck = async (e) => {
          if(id !== "0") {
               document.getElementById(id).style.borderRight = "none";
          }
          setId(e.currentTarget.getAttribute("data-key"));
          Array.from(document.getElementsByClassName("member")).forEach((element, index) => {
               element.style.borderLeft = "3px solid #A3A3A3";
          })
          e.currentTarget.style.borderLeft = "3px solid #2699FB";
     }
     const onAccept = async () => {
          try {
               const { data } = await editApplicationsMutation({
                    variables: {
                         id: id,
                         action: "PASS"
                    }
               });
               if(!data) {
                    console.error("fail to edit application");
               } else {
                    toast.info("수락하였습니다.");
               }
          } catch (e) {
               console.log(e.message);
               toast.error("다시 시도해 주세요");
          }
     }
     const onReject = async () => {
          try {
               const { data } = await editApplicationsMutation({
                    variables: {
                         id: id,
                         action: "FAIL"
                    }
               });
               if(!data) {
                    console.error("fail to edit application");
               } else {
                    toast.info("거절하였습니다.");
               }
          } catch (e) {
               console.log(e.message);
          }
     }
     const onDelete = async () => {
          try {
               const { data } = await deleteApplicantsMutation({
                    variables: {
                         id: id
                    }
               });
               if(!data) {
                    console.error("fail to delete application");
               } else {
                    toast.info("지원서를 삭제하였습니다.");
               }
          } catch (e) {
               console.log(e.message);
               toast.error("다시 시도해 주세요.");
          }
     }
     return (
          <ApplicantPresenter
               loading={getApplicantsQuery.loading}
               applicants={applicants}
               onCheck={onCheck}
               onAccept={onAccept}
               onReject={onReject}
               onDelete={onDelete}
               id={id}
          />
     );
}