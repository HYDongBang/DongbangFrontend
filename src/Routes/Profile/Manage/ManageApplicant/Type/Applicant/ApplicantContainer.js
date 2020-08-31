import React, { useState } from "react";
import ApplicantPresenter from "./ApplicantPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { GET_APPLICANTS, EDIT_APPLICANTS, DELETE_APPLICANTS } from "./ApplicantQueries";

export default () => {
     const [id, setId] = useState("0");
     const getApplicantsQuery = useQuery(GET_APPLICANTS);
     const [ deleteApplicantsMutation ] = useMutation(DELETE_APPLICANTS);
     const [ editApplicationsMutation ] = useMutation(EDIT_APPLICANTS);
     const applicants = [
          { id: "1", name: "홍길동", status: "CHECK", email: "abc@naver.com", phoneNumber: "010-1234-1234", sex:"male", university: "한양대", major: "컴소", studentNumber: "2017011112", form: [{ question: "지원동기를 작성해주세요.", answer: "어쩌구ㅇㄹㅇㄹㅇㄹㅇ" }, { question: "q2", answer: "저ㅇㄹ러" }] },
          { id: "2", name: "홍길홍", status: "UNCHECK", email: "abc@naver.com", phoneNumber: "010-1234-1234", sex:"male", university: "한양대", major: "컴소", studentNumber: "2017011112", form: [{ question: "지원동기를 작성해주세요.", answer: "어쩌구ㅇㄹㅇㄹㅇㄹㅇ" }, { question: "q2", answer: "저ㅇㄹ러" }] },
          { id: "3", name: "홍길봉", status: "PASS", email: "abc@naver.com", phoneNumber: "010-1234-1234", sex:"male", university: "한양대", major: "컴소", studentNumber: "2017011112", form: [{ question: "지원동기를 작성해주세요.", answer: "어쩌구ㅇㄹㅇㄹㅇㄹㅇ" }, { question: "q2", answer: "저ㅇㄹ러" }] },
     ];

     if(!getApplicantsQuery.loading) {
          const applications = getApplicantsQuery.data.me.isMaster.applications;
          const questions = getApplicantsQuery.data.me.isMaster.questions;
          let num = 0;
          const form = questions.map((question, index) => {
               return { question: question, answer: applications.answer[index]}
          })
          applications.forEach(application => applicants.push({
               id: toString(++num), 
               name: application.user.Name, 
               studentNumber: application.user.studentNumber,
               form: form
          }));
     }

     const onCheck = async (e) => {
          setId(e.currentTarget.getAttribute("data-key"));
          Array.from(document.getElementsByClassName("member")).forEach((element, index) => {
               element.style.borderLeft = "3px solid #A3A3A3";
          })
          e.currentTarget.style.borderLeft = "3px solid #2699FB";
          /*try {
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
          }*/
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