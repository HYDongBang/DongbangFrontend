import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { GET_CLUBS } from "./MainQueries";
import { ClubFilter } from "./ClubFilter";
import Loading from "../../Components/Loading";
import styles from "../../Styles/Searchbox.css";

const Wrapper = styled.div`
  padding-top: 50px;
  min-height: 90vh;
  z-index: -1;
`;
const Top = styled.div`
  height: 30%;
  background-color: white;
  width: 100%;
  text-align: center;
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
  font-family: "NanumGothic";
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
  font-size: 3.5em;
  padding: 5px;
  font-family: "Jua";
  text-align: center;
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

export default ({
  myType,
  setType,
  word,
  setWord,
  filterDisplay,
  setFilterDisplay,
}) => {
  const { loading, data } = useQuery(GET_CLUBS);

  const handleChange = (e) => {
    setWord(e);

    let oldList = data.allClub.map((club) => {
      return { id: club.id, name: club.name, type: club.type };
    });

    if (word !== "") {
      let newList = [];
      newList = oldList.filter((club) => club.name.includes(word));
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(data.allClub);
    }
  };

  return (
    <Wrapper>
      <Top>
        <img
          src="https://opendoodles.s3-us-west-1.amazonaws.com/sprinting.gif"
          style={{
            width: "300px",
            height: "260px",
            margin: "0 auto",
          }}
        />
        <Icon>동방</Icon>
        <input
          className="search__input"
          style={{
            width: "40%",
            overfolow: "hidden",
          }}
          value={word}
          placeholder="찾으려는 동아리 명을 입력해주세요."
          onChange={(e) => handleChange(e.target.value)}
        />
      </Top>

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

      {loading && <Loading />}
      {!loading && data.allClub && (
        <Clubs>
          <ClubFilter
            clubs={word.length < 1 ? data.allClub : filterDisplay}
            myType={myType}
          />
        </Clubs>
      )}
    </Wrapper>
  );
};
