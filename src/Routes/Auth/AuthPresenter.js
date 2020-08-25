import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "NanumGothic";
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
      cursor: pointer;
    }
  }
`;

const Email = styled.div`
  display: flex;
  align-items: center;
`;

const Secret = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 8px;
  margin-bottom: 7px;
  font-size: 0.8em;
  width: 50px;
  height: 32px;
  border: 1px solid ${props => props.theme.darkGrayColor};
  background: ${props => props.theme.whiteColor};
  color: ${props => props.theme.darkGrayColor};
  &:hover {
    background: ${props => props.theme.blueColor};
    border: 1px solid ${props => props.theme.blueColor};
    color: ${props => props.theme.whiteColor};
    transition: all .3s
  }
`;

const GrayButton = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.darkGrayColor};
  background-color: ${(props) => props.theme.grayColor};
  text-align: center;
  padding: 7px 0px;
  cursor: none;
  font-weight: 600;
  font-size: 14px;
`;

export default ({
  action,
  email,
  password,
  auth,
  name,
  studentNumber,
  phoneNumber,
  university,
  major,
  setAction,
  onSubmit,
  isChecked,
  onSecret
}) => (
  <Wrapper>
    <Form>
      {action === "logIn" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"Email"} {...email} type="email" />
          <Input placeholder={"Password"} {...password} type="password" />
          <Button text={"로그인"} />
        </form>
      )}
      {action === "auth" && (
        <form onSubmit={onSubmit}>
          <Email>
            <Input placeholder={"이메일을 입력해주세요"} {...email} type="email" />
            <Secret onClick={onSecret}>인증</Secret>
          </Email>
          <Input placeholder={"인증번호를 입력해주세요"} {...auth} />
          {isChecked === true && (
            <Button text={"인증하기"} />
          )}
          {isChecked === false && (
            <GrayButton>이메일을 인증해주세요.</GrayButton>
          )}
        </form>
      )}
      {action === "signUp" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"이름"} {...name} />
          <Input placeholder={"학번"} {...studentNumber} />
          <Input placeholder={"연락처"} {...phoneNumber} />
          <Input placeholder={"대학교"} {...university} />
          <Input placeholder={"전공"} {...major} />
          <Input placeholder={"비밀번호"} {...password} type="password" />
        <Button text={"회원가입"} />
      </form>
      )}
    </Form>
    <StateChanger>
      {action === "logIn" ? (
        <>
          계정이 없으신가요?{" "}
          <Link onClick={() => setAction("auth")}>회원가입</Link>
        </>
      ) : (
        <>
          계정이 있으신가요?{" "}
          <Link onClick={() => setAction("logIn")}>로그인</Link>
        </>
      )}
    </StateChanger>
  </Wrapper>
);
