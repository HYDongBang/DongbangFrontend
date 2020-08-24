import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { LOG_IN, CREATE_ACCOUNT, LOCAL_LOG_IN } from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const email = useInput("");
  const password = useInput("");

  const [ requestLoginMutation ] = useMutation(LOG_IN);
  const [ createAccountMutation] = useMutation(CREATE_ACCOUNT);
  const [ localLogInMutation ] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "" && password.value !== "") {
        try {
          const {
            data: { signIn: token },
          } = await requestLoginMutation({
            variables: {
              email: email.value,
              password: password.value,
            },
          });
          if (!token || token === "") {
            toast.error(
              "계정이 없습니다. 잠시후 회원가입 페이지로 이동합니다."
            );
            setTimeout(() => setAction("signUp"), 2000);
          } else {
            toast.info("로그인 성공");
            localLogInMutation({ variables: { token } });
            window.location.assign(window.location.href.slice(0, -4) + "main");
          }
        } catch (e) {
          toast.error("다시 시도해 주세요");
        }
      } else {
        toast.error("메일 혹은 비밀번호를 모두 입력해주세요.");
      }
    } else if (action === "signUp") {
      if (email.value !== "" && password.value !== "") {
        try {
          const {
            data: { createAccount: id },
          } = await createAccountMutation({
            variables: {
              auth: true, // 임시
              email: email.value,
              password: password.value,
            },
          });
          if (!id || id === "") {
            toast.error("다른 아이디를 입력해주세요.");
          } else {
            toast.info(
              "계정이 생성되었습니다. 잠시후 로그인 페이지로 이동합니다."
            );
            setTimeout(() => setAction("logIn"), 2000);
          }
        } catch (err) {
          console.log(err.message);
          toast.error("계정을 생성할 수 없습니다. 다시 시도해주세요.");
        }
      } else {
        toast.error("모든 입력창을 채워주세요.");
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      email={email}
      password={password}
      onSubmit={onSubmit}
    />
  );
};
