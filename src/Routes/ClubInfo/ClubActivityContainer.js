import React, { useState } from "react";
import ClubActivity from "./ClubActivity";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

import { CREATE_POST, CREATE_COMMENT } from "./ClubInfoQueries";

export default ({ club }) => {
  const [action, setAction] = useState("");
  const [commentAction, setCommentAction] = useState("");

  const comment = useInput("");
  const [createCommentMutation] = useMutation(CREATE_COMMENT);

  // 이부분 가져가면 돼!
  const title = useInput("");
  const content = useInput("");

  const [createPostMutation] = useMutation(CREATE_POST);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && content !== "") {
      try {
        const {
          data: { createPost: id },
        } = await createPostMutation({
          variables: {
            cid: club.id,
            content: content.value,
            title: title.value,
            type: "POST",
          },
        });
        if (!id || id === "") {
          toast.error("전송 오류");
        } else {
          toast.info("전송 완료");
          setAction("");
        }
      } catch (err) {
        console.log(err.message);
        toast.error("신청서를 보낼 수 없습니다. 다시 시도해주세요.");
      }
    } else {
      toast.error("모든 입력창을 채워주세요.");
    }
  };
  //여기까지

  const onCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment !== "") {
      try {
        const {
          data: { createComment: id },
        } = await createCommentMutation({
          variables: {
            pid: action,
            content: comment.value,
          },
        });
        if (!id || id === "") {
          toast.error("전송 오류");
        } else {
          toast.info("전송 완료");
          setAction("");
        }
      } catch (err) {
        console.log(err.message);
        toast.error("댓글을 쓸 수 없습니다. 다시 시도해주세요.");
      }
    } else {
      toast.error("입력창을 채워주세요.");
    }
  };

  return (
    <ClubActivity
      action={action}
      setAction={setAction}
      club={club}
      title={title}
      content={content}
      comment={comment}
      onSubmit={onSubmit}
      onCommentSubmit={onCommentSubmit}
      commentAction={commentAction}
      setCommentAction={setCommentAction}
    />
  );
};
