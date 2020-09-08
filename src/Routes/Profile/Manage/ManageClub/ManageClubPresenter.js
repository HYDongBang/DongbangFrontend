import React from "react";
import styled from "styled-components";
import ProfileInput from "../../../../Components/ProfileInput";
import Textarea from "../../../../Components/Textarea";
import Loading from "../../../../Components/Loading";
import Fileinput from "../../../../Components/Fileinput";
import styles from "../../../../Styles/Profile.css";
const Title = styled.div`
  padding: 30px 0px 30px 0px;
  font-size: 1.7em;
  text-align: center;
  font-family: "NanumGothic";
`;

const Line = styled.div`
  height: 1px;
  width: 80px;
  background-color: black;
  margin: 15px auto;
`;

const Questions = styled.div``;

const Question = styled.div`
  margin: 25px 0px;
  border-bottom: 1px solid ${props => props.theme.grayColor};
  padding: 15px 0px;
  display: flex;
  align-items: center;
`;

const About = styled.div`
  width: 150px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  padding-top: 30px;
  text-align: center;
`;

const Button = styled.button`
  border: 1px solid ${props => props.theme.darkGrayColor};
  color: ${props => props.theme.darkGrayColor};
  border-radius: 5px;
  padding: 10px 30px;
  background-color: ${props => props.theme.whiteColor};
  margin: 0px auto;
  cursor: pointer;
  &:hover {
    border: 1px solid ${props => props.theme.blueColor};
    background-color: ${props => props.theme.blueColor};
    color: ${props => props.theme.whiteColor};
    transition: 0.3s;
  }
`;

export default ({
  name,
  type,
  bio,
  description,
  logoLabel,
  clubLabel,
  onSubmit,
  onUpload,
  loading
}) => (
  <>
    <Title>
      <div>동아리 정보 관리</div>
      <Line></Line>
    </Title>
    {loading && <Loading></Loading>}
    {!loading && (
      <form onSubmit={onSubmit}>
        <Questions>
          <Question>
            <About>동아리 이름</About>
            <ProfileInput placeholder={"ex) 사랑한대"} {...name}></ProfileInput>
          </Question>
          <Question>
            <About>동아리 타입</About>
            <ProfileInput placeholder={"40자 이내로 입력하세요."} {...type}></ProfileInput>
          </Question>
          <Question>
            <About>동아리 한줄 소개</About>
            <ProfileInput placeholder={"40자 이내로 입력하세요."} {...bio}></ProfileInput>
          </Question>
          <Question>
            <About>동아리 설명글</About>
            <Textarea placeholder={"500자 이내로 입력하세요."} {...description}></Textarea>
          </Question>
          <Question className="file">
            <About>동아리 로고</About>
            <Fileinput
              placeholder={"파일 선택"}
              className={"upload-name"}
              {...logoLabel}
              disabled={true}
            ></Fileinput>
            <label htmlFor="logo">업로드</label>
            <input type="file" id="logo" onChange={onUpload}></input>
          </Question>
          <Question className="file">
            <About>동아리 대표 이미지</About>
            <Fileinput
              placeholder={"파일 선택"}
              className={"upload-name"}
              {...clubLabel}
              disabled={true}
            ></Fileinput>
            <label htmlFor="clubImg">업로드</label>
            <input type="file" id="clubImg" onChange={onUpload}></input>
          </Question>
        </Questions>
        <ButtonContainer>
          <Button>저장하기</Button>
        </ButtonContainer>
      </form>
    )}
  </>
);
