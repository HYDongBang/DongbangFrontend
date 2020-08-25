import React from "react";
import styled from "styled-components";
import ClubActivityInput from "../../Components/ClubActivityInput";
import ClubActivityInputTitle from "../../Components/ClubActivityInputTitle";

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
  height: 40%;
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
  line-height: 1.4em;
  height: 60px;
  border-radius: 0px 0px 10px 10px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
`;

const Comment = styled.div`
  line-height: 1.4em;
  width: 100%;
  margin-bottom: 2px;
  display: flex;
`;
const SubComment = styled.div`
  margin-left: 15px;
  font-size: 0.9em;
  line-height: 1.4em;
  width: 100%;
  margin-bottom: 2px;
  display: flex;
`;
const CommentName = styled.div`
  font-weight: 600;
  margin-right: 10px;
`;

const Button = styled.div`
  width: 100px;
  height: 40px;
  float: right;
  background: black;
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
  width: 80px;
  background-color: black;
  margin: 15px auto;
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
}) => {
  const posts = club.posts;

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
              {post.comments !== [] &&
                post.comments.map((comment) => (
                  <>
                    <Comment>
                      <CommentName>{comment.user.Name}</CommentName>
                      {comment.content}
                    </Comment>
                    {comment.subComments !== [] &&
                      comment.subComments.map((subComment) => (
                        <SubComment>
                          <CommentName>{subComment.user.Name}</CommentName>
                          {subComment.content}
                        </SubComment>
                      ))}
                  </>
                ))}
            </PostContainer>
            <form onSubmit={onCommentSubmit}>
              <ClubActivityInput
                placeholder="내용"
                cols="5"
                rows="1"
                {...comment}
                type="text"
              ></ClubActivityInput>
              <button type="submit">보내기</button>
            </form>
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
                <button type="submit">보내기</button>
              </form>
            </ClubContainer>
          )}
        </Container>
      </NoScroll>
      {action !== "" && <Button onClick={() => setAction("")}></Button>}
      {action === "" && <Button onClick={() => setAction("newPost")}></Button>}
    </>
  );
};
