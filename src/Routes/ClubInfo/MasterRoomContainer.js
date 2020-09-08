import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";
import { SEND_MESSAGE } from "./ClubInfoQueries";
import { toast } from "react-toastify";

import MasterRoom from "../ClubInfo/MasterRoom";

export default ({ club, setAction, setSelect, room }) => {
  const message = useInput("");
  const [sendMessageMutation] = useMutation(SEND_MESSAGE);
  console.log(room);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (message.value !== "") {
      try {
        const {
          data: { sendMessage: id },
        } = await sendMessageMutation({
          variables: {
            toId: room.messages[0].from.id,
            message: message.value,
            roomId: room.id,
          },
        });
        if (!id || id === "") {
          toast.error("전송 오류");
        } else {
          window.location.reload();
          toast.info("보내짐");
        }
      } catch (err) {
        console.log(err.message);
        toast.error("메시지를 보낼 수 없습니다. 다시 시도해주세요.");
      }
    }
    message.setValue("");
  };

  return (
    <MasterRoom
      club={club}
      setSelect={setSelect}
      room={room}
      message={message}
      onSubmit={onSubmit}
    />
  );
};
