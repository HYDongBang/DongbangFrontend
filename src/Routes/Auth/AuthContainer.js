import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { LOG_IN, REQUEST_SECRET, CONFIRM_SECRET, CREATE_ACCOUNT, DELETE_SECRET, LOCAL_LOG_IN } from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const [isChecked, setChecked] = useState(false);
  const email = useInput("");
  const auth = useInput("");
  const password = useInput("");
  const name = useInput("");
  const studentNumber = useInput("");
  const phoneNumber = useInput("");
  const university = useInput("");
  const major = useInput("");

  const [ requestLoginMutation ] = useMutation(LOG_IN);
  const [ requestSecretMutation ] = useMutation(REQUEST_SECRET);
  const [ confirmSecretMutation ] = useMutation(CONFIRM_SECRET);
  const [ createAccountMutation] = useMutation(CREATE_ACCOUNT);
  const [ deleteSecretMutation ] = useMutation(DELETE_SECRET);
  const [ localLogInMutation ] = useMutation(LOCAL_LOG_IN);

  const onSecret = async (e) => {
    if(email.value !== "") {
      const { data: { requestSecret }} = await requestSecretMutation({
        variables: {
          email: email.value
      }});
      if(requestSecret === "이메일 인증값을 입력하세요") {
        setChecked(true);
        toast.info(requestSecret);
      } else if(requestSecret === "이미 가입된 이메일 입니다.") {
        toast.error(requestSecret);
      }
    } else {
      toast.error("이메일을 입력해주세요.");
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "" && password.value !== "") {
        try {
          const { data: { signIn: token } } = await requestLoginMutation({
            variables: {
            email: email.value,
            password: password.value
          }});
          if (!token || token === "") {
            toast.error("계정이 없습니다. 잠시후 회원가입 페이지로 이동합니다.");
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
      if (password.value !== "" && name.value !== "" && studentNumber.value !== "" && phoneNumber.value !== "" && university.value !== "" && major.value !== "") {
        try {
          const { data: { createAccount } } = await createAccountMutation({
            variables: {
              auth: isChecked,
              email: email.value,
              studentNumber: studentNumber.value,
              phoneNumber: phoneNumber.value,
              university: university.value,
              major: major.value,
              password: password.value,
              Name: name.value,
              sex: "여자" // 임시
          }});
          if (!createAccount) {
            toast.error("계정 생성에 실패했습니다. 다시 시도해 주세요.");
          } else {
            toast.info("계정이 생성되었습니다. 잠시후 로그인 페이지로 이동합니다.");
            setTimeout(() => setAction("logIn"), 2000);
          }
        } catch (err) {
          console.log(err.message);
          toast.error("계정을 생성할 수 없습니다. 다시 시도해주세요.");
        }
      } else {
        toast.error("모든 입력창을 채워주세요.");
      }
    } else if (action === "auth") {
      if(auth !== "") {
        try {
          const { data: { confirmSecret } } = await confirmSecretMutation({
            variables: {
              email: email.value,
              getSecret: auth.value
          }});
          if(!confirmSecret) {
            console.log(confirmSecret);
            toast.error("인증에 실패했습니다. 다시 시도해주세요.");
          } else {
            toast.info("인증에 성공하였습니다. 정보를 입력해주세요.");
            setAction("signUp");
            const { data: { deleteSecret }} = await deleteSecretMutation({
              variables: {
                email: email.value
            }});
          }
        } catch (err) {
          console.log(err.message);
          toast.error("인증에 실패했습니다. 다시 시도해주세요.");
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      email={email}
      auth={auth}
      password={password}
      onSubmit={onSubmit}
      name={name}
      studentNumber={studentNumber}
      phoneNumber={phoneNumber}
      university={university}
      major={major}
      onSecret={onSecret}
      isChecked={isChecked}
    />
  );
};
