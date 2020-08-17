import React from "react";
import { useMutation } from "react-apollo-hooks";
import ClubTalk from "./ClubTalk";
import useInput from "../../Hooks/useInput";
import { SEND_MESSAGE } from "./ClubInfoQueries";
import { toast } from "react-toastify";

export default ({ name }) => {
  const message = useInput("");

  const sendMessageMutation = useMutation(SEND_MESSAGE, {
    variables: {
      writer: "유저이름",
      sender: "받는사람이름",
      message: message.value,
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (message.value !== "") {
      try {
        const {
          data: { sendMessage },
        } = await sendMessageMutation();
        if (!sendMessage) {
          toast.error("없음");
        }
      } catch (e) {
        toast.error(e.message);
        console.log();
      }
    } else {
    }
  };

  return <ClubTalk name={name} message={message} onSubmit={onSubmit} />;
};

// 수정해야함.. 참고링크 https://medium.com/wasd/graphql%EA%B3%BC-react%EB%A1%9C-%EC%B1%84%ED%8C%85-%EA%B5%AC%ED%98%84-client-side-3299e166df6a
