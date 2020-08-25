import React, { useState } from "react";
import ClubApply from "./ClubApply";
import { toast } from "react-toastify";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";

import { CREATE_APPLICATION } from "./ClubInfoQueries";

export default ({ club }) => {

  const [myanswers, setMyAnswers] = useState([]);
  const [answer, setAnswer] = useState("");


  const [createApplicationMutation] = useMutation(CREATE_APPLICATION);

  const onSubmit = async (e) => {};
  return (
    <ClubApply
      club={club}
      myanswers={myanswers}
      answer={answer}
      setMyAnswers={setMyAnswers}
      setAnswer={setAnswer}
    />
  );
};
