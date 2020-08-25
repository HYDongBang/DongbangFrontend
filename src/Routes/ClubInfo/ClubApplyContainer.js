import React, { useState } from "react";
import ClubApply from "./ClubApply";
import { toast } from "react-toastify";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";

import { CREATE_APPLICATION } from "./ClubInfoQueries";

export default ({ club }) => {
  const [myanswers, setMyAnswers] = useState([""]);

  const [createApplicationMutation] = useMutation(CREATE_APPLICATION);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (myanswers.length === club.questions.length) {
      console.log(myanswers);
      try {
        const {
          data: { createApplication: id },
        } = await createApplicationMutation({
          variables: {
            cid: club.id,
            answers: myanswers,
          },
        });
        if (!id || id === "") {
          toast.error("전송 오류");
        } else {
          window.location.assign((window.location.replace = "/"));
          toast.info("전송 완료");
        }
      } catch (err) {
        console.log(err.message);
        toast.error("신청서를 보낼 수 없습니다. 다시 시도해주세요.");
      }
    } else {
      toast.error("모든 입력창을 채워주세요.");
    }
  };
  return <ClubApply club={club} myanswers={myanswers} onSubmit={onSubmit} />;
};
