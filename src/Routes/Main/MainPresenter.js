import React, { useState } from "react";
import styled from "styled-components";
// import { GET_CLUB } from "./MainQueries";
import { ClubFilter } from "./ClubFilter";

const Wrapper = styled.div`
  padding-top: 50px;
  min-height: 90vh;
  z-index: -1;
`;

const Search = styled.div`
  width: 100%;
  height: 27%;
  text-align: center;
  padding: 60px 0px;
`;

const Categories = styled.div`
  width: 100%;
  height: 15%;
  background-color: ${(props) => props.theme.whiteColor};
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-context: space-between;
  padding: 40px 20%;
`;

const Clubs = styled.div`
  width: 100%;
  height: 58%;
  background-color: ${(props) => props.theme.whiteColor};
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-context: space-between;
  padding: 0px 20vw;
  padding-bottom: 60px;
`;

const Icon = styled.div`
  font-weight: 700;
  font-size: 3.5em;
  padding: 20px;
`;

const Category = styled.div``;

const Img = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 200px;
  border: 1px solid ${(props) => props.theme.grayColor};
  &:hover {
    box-shadow: ${(props) => props.theme.lightGrayShadow};
    cursor: pointer;
  }
`;

const Text = styled.div`
  padding: 10px;
  text-align: center;
`;

export default ({ myType, setType, word, setWord }) => {
  //const { loading, error, data } = useQuery(GET_CLUBS);
  //const { clubs } = data;

  const clubs = [
    {
      id: 1,
      name: "안녕",
      type: "Art",
    },
    {
      id: 2,
      name: "반가워",
      type: "Academic",
    },
    {
      id: 3,
      name: "감자",
      type: "Friendship",
    },
    {
      id: 4,
      name: "고구마",
      type: "Unite",
    },
    {
      id: 5,
      name: "호박",
      type: "Etc",
    },
  ];
  const [filterDisplay, setFilterDisplay] = useState(clubs);

  const handleChange = (e) => {
    setWord(e);
    let oldList = clubs.map((club) => {
      return { id: club.id, name: club.name, type: club.type };
    });
    if (word !== "") {
      let newList = [];
      newList = oldList.filter((club) => club.name.includes(word));
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(clubs);
    }
  };

  return (
    <Wrapper>
      <Search>
        <Icon>ㄷㅂ</Icon>
        <input
          style={{
            width: "400px",
            padding: "7px 15px",
            border: "1px solid #7FC4FD",
          }}
          value={word}
          placeholder="찾으려는 동아리 명을 입력해주세요."
          onChange={(e) => handleChange(e.target.value)}
        />
      </Search>
      {/* 위에 input은 레이아웃을 위한 임시
            <form onSubmit={onSubmit}>
               <Input placeholder={"Email"} {...email} type="email" />
               <Button div={"Log in"} />
            </form>*/}

      <Categories>
        {myType === "Art" ? (
          <Category onClick={() => setType("")}>
            <Img></Img>
            <Text>예체능</Text>
          </Category>
        ) : (
          <Category onClick={() => setType("Art")}>
            <Img></Img>
            <Text>예체능</Text>
          </Category>
        )}

        {myType === "Academic" ? (
          <Category onClick={() => setType("")}>
            <Img></Img>
            <Text>학술</Text>
          </Category>
        ) : (
          <Category onClick={() => setType("Academic")}>
            <Img></Img>
            <Text>학술</Text>
          </Category>
        )}

        {myType === "Friendship" ? (
          <Category onClick={() => setType("")}>
            <Img></Img>
            <Text>친목</Text>
          </Category>
        ) : (
          <Category onClick={() => setType("Friendship")}>
            <Img></Img>
            <Text>친목</Text>
          </Category>
        )}

        {myType === "Unite" ? (
          <Category onClick={() => setType("")}>
            <Img></Img>
            <Text>연합</Text>
          </Category>
        ) : (
          <Category onClick={() => setType("Unite")}>
            <Img></Img>
            <Text>연합</Text>
          </Category>
        )}

        {myType === "Etc" ? (
          <Category onClick={() => setType("")}>
            <Img></Img>
            <Text>기타</Text>
          </Category>
        ) : (
          <Category onClick={() => setType("Etc")}>
            <Img></Img>
            <Text>기타</Text>
          </Category>
        )}
      </Categories>

      <Clubs>
        <ClubFilter
          clubs={word.length < 1 ? clubs : filterDisplay}
          myType={myType}
        />
      </Clubs>
    </Wrapper>
  );
};
