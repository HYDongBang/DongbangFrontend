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
  font-size: 1.4em;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Context = styled.div`
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
  height: 3px;
  width: 15%;
  background-color: ${(props) => props.theme.grayColor};
  margin: 9px auto 15px 0;
`;
const NoPost = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${(props) => props.theme.grayColor};
  margin: auto;
`;

export default ({ club, action, setAction }) => {
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
              <Line />
              <Context>{post.content}</Context>
            </PostContainer>
          </ClubContainer>
        </>
      )}
    </>
  ));
  console.log(myPost);
  return (
    <>
      <NoScroll>
        <Container>
          {myPost.length !== 0 ? (
            <> {myPost} </>
          ) : (
            <NoPost> 포스트가 없습니다</NoPost>
          )}
        </Container>
      </NoScroll>

      {action !== "" && (
        <InfoButton onClick={() => setAction("")} text="돌아가기" />
      )}
    </>
  );
};
