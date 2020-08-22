import React from "react";
import { useMutation } from "react-apollo-hooks";
import ClubTalk from "./ClubTalk";
import useInput from "../../Hooks/useInput";
import { SEND_MESSAGE } from "./ClubInfoQueries";
import { toast } from "react-toastify";

export default ({ club }) => {
  const message = useInput("");

  const [sendMessageMutation] = useMutation(SEND_MESSAGE);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (message.value !== "") {
      try {
        const {
          data: { sendMessage: id },
        } = await sendMessageMutation({
          variables: {
            toId: club.master.id,
            message: message.value,
          },
        });
        if (!id || id === "") {
          toast.error("전송 오류");
        } else {
          toast.info("보내짐");
        }
      } catch (err) {
        console.log(err.message);
        toast.error("계정을 생성할 수 없습니다. 다시 시도해주세요.");
      }
    }
  };

  return <ClubTalk club={club} message={message} onSubmit={onSubmit} />;
};
