import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import ClubTalk from "./ClubTalk";
import useInput from "../../Hooks/useInput";
import { SEND_MESSAGE } from "./ClubInfoQueries";
import { toast } from "react-toastify";
import { useQuery } from "react-apollo-hooks";
import { SEE_ROOM } from "./ClubInfoQueries";
import ClubInfoContainer from "../ClubInfo/ClubInfoContainer";

export default ({ club, setAction }) => {
  const message = useInput("");
  let chats;
  let myRoomId;
  const [sendMessageMutation] = useMutation(SEND_MESSAGE);

  const { loading, data } = useQuery(SEE_ROOM, {
    variables: { clubId: club.master.id },
  });

  if (!loading && data.seeRoom) {
    chats = data.seeRoom[0].messages;
    myRoomId = data.seeRoom[0].id;
  }
  if (!loading) {
    console.log(data.seeRoom);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      if (message.value !== "" && data.seeRoom === undefined) {
        console.log("first");
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
            window.location.reload();
            toast.info("보내짐");
          }
        } catch (err) {
          console.log(err.message);
          toast.error("메시지를 보낼 수 없습니다. 다시 시도해주세요.");
        }
      } else if (message.value !== "") {
        console.log("second");

        try {
          const {
            data: { sendMessage: id },
          } = await sendMessageMutation({
            variables: {
              toId: club.master.id,
              message: message.value,
              roomId: data.seeRoom[0].id,
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
    }
    message.setValue("");
  };

  return (
    <ClubTalk
      club={club}
      message={message}
      onSubmit={onSubmit}
      myRoomId={myRoomId}
      myChats={chats}
      chatloading={loading}
    />
  );
};
