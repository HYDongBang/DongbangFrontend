import React from "react";
import styled from "styled-components";
import ClubActivityInput from "../../Components/ClubActivityInput";
import ClubActivityInputTitle from "../../Components/ClubActivityInputTitle";
import InfoButton from "../../Components/InfoButton";

const NoScroll = styled.div`
  width: 90%;
  overflow-x: hidden;
  margin: 0 auto;
`;

const Container = styled.div`
  height: 700px;
  width: 103%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

const ClubContainer = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  box-shadow: ${(props) => props.theme.lightGrayShadow};
`;
const PostContainer = styled.div`
  height: 620px;
`;

const ClubImg = styled.div`
  height: 27%;
  width: 32%;
  margin: 0.5%;
  border: 1px solid black;
`;

const ClubImgMain = styled.div`
  height: 50%;
  width: 100%;
  border: 1px solid black;
`;

const Title = styled.div`
  font-size: 1.2em;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Context = styled.div`
  font-size: 1.1em;
  margin-bottom: 10px;
  margin-left: 5px;
  line-height: 1.4em;
`;

const Question = styled.div`
  margin: 30px 0px;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};
  padding: 20px 0px;
  display: flex;
  align-items: center;
`;

const About = styled.div`
  width: 100px;
  font-weight: 600;
`;

const PostTitle = styled.div`
  padding-top: 30px;
  font-size: 1.7em;
  text-align: center;
`;

const Line = styled.div`
  height: 1px;
  width: 80%;
  background-color: ${(props) => props.theme.grayColor};
  margin: 5px auto 15px auto;
`;

export default ({
  club,
  action,
  setAction,
  title,
  content,
  comment,
  onSubmit,
  onCommentSubmit,
  commentAction,
  setCommentAction,
}) => {
  const posts = club.posts;
  console.log(commentAction);
  const myPost = posts.map((post) => (
    <>
      {action === "" && <ClubImg onClick={() => setAction(post.id)}></ClubImg>}
      {action === `${post.id}` && (
        <>
          <ClubContainer>
            <PostContainer>
              <ClubImgMain />
              <Title>{post.title}</Title>
              <Context>{post.content}</Context>
              <Line />
            </PostContainer>
          </ClubContainer>
        </>
      )}
    </>
  ));

  return (
    <>
      <NoScroll>
        <Container>
          {myPost}

          {/* 이부분 가져가면 돼! */}
          {action === "newPost" && (
            <ClubContainer>
              <form onSubmit={onSubmit}>
                <PostTitle>
                  포스트 작성
                  <Line />
                </PostTitle>
                <Question>
                  <About>제목</About>
                  <ClubActivityInputTitle
                    placeholder="제목"
                    {...title}
                    type="text"
                  ></ClubActivityInputTitle>
                </Question>
                <Question>
                  <About>내용</About>
                  <ClubActivityInput
                    placeholder="내용"
                    cols="20"
                    rows="14"
                    {...content}
                    type="text"
                  ></ClubActivityInput>
                </Question>
                <InfoButton type="submit" text="보내기"></InfoButton>
              </form>
            </ClubContainer>
          )}
          {/* 여기까지 */}
        </Container>
      </NoScroll>
      {action === "" && (
        <InfoButton
          onClick={() => setAction("newPost")}
          text="포스트 생성"
        ></InfoButton>
      )}
      {action !== "" && (
        <InfoButton onClick={() => setAction("")} text="돌아가기"></InfoButton>
      )}
    </>
  );
};
