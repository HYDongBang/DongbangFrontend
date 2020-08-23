import React from "react";
import ClubApply from "./ClubApply";
import { toast } from "react-toastify";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";

import { CREATE_APPLICATION } from "./ClubInfoQueries";

export default ({ club }) => {
  const answer = useInput("");
  const [createApplicationMutation] = useMutation(CREATE_APPLICATION);

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (answer.value !== "") {
  //     try {
  //       const {
  //         data: { sendApplication },
  //       } = await sendApplicationMutation();
  //       if (!sendApplication) {
  //         toast.error("신청서 전송 중 에러가 발생했습니다.");
  //       }
  //     } catch {
  //       toast.error("신청서를 보낼 수 없습니다.");
  //     }
  //   }
  // };
  return <ClubApply club={club} answer={answer} />;
};
