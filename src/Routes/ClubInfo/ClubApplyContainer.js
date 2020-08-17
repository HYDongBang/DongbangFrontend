import React from "react";
import ClubApply from "./ClubApply";
import { toast } from "react-toastify";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";

import { SEND_APPLICATION } from "./ClubInfoQueries";

export default ({ name, bio, applications }) => {
  const answer = useInput("");
  const sendApplicationMutation = useMutation(SEND_APPLICATION, {
    variables: {
      answer: answer.value,
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (answer.value !== "") {
      try {
        const {
          data: { sendApplication },
        } = await sendApplicationMutation();
        if (!sendApplication) {
          toast.error("신청서 전송 중 에러가 발생했습니다.");
        }
      } catch {
        toast.error("신청서를 보낼 수 없습니다.");
      }
    }
  };
  return (
    <ClubApply
      name={name}
      bio={bio}
      applications={applications}
      answer={answer}
      onSubmit={onSubmit}
    />
  );
};
