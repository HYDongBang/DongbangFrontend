import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { GET_CLUBS, ME } from "./MainQueries";
import { ClubFilter } from "./ClubFilter";
import Loading from "../../Components/Loading";
import styles from "../../Styles/Searchbox.css";
import NotificationSystem from "react-notification-system";

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
  // const notificationSystem = React.createRef();

  // const addNotification = (event) => {
  //   event.preventDefault();
  //   const notification = notificationSystem.current;
  //   notification.addNotification({
  //     message: "Notification message",
  //     level: "success",
  //   });
  // };
  // const { loading: notificationLoading, data: notificationData } = useQuery(ME);

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
        {myType === "1" ? (
          <Category onClick={() => setType("")}>
            <Img></Img>
            <Text>교양/종교</Text>
          </Category>
        ) : (
          <Category onClick={() => setType("1")}>
            <Img></Img>
            <Text>교양/종교</Text>
          </Category>
        )}

        {myType === "2" ? (
          <Category onClick={() => setType("")}>
            <Img></Img>
            <Text>전시/공예</Text>
          </Category>
        ) : (
          <Category onClick={() => setType("2")}>
            <Img></Img>
            <Text>전시/공예</Text>
          </Category>
        )}

        {myType === "3" ? (
          <Category onClick={() => setType("")}>
            <Img></Img>
            <Text>학술</Text>
          </Category>
        ) : (
          <Category onClick={() => setType("3")}>
            <Img></Img>
            <Text>학술</Text>
          </Category>
        )}

        {myType === "4" ? (
          <Category onClick={() => setType("")}>
            <Img></Img>
            <Text>체육</Text>
          </Category>
        ) : (
          <Category onClick={() => setType("4")}>
            <Img></Img>
            <Text>체육</Text>
          </Category>
        )}

        <Category onClick={() => setType("")}>
          <Img></Img>
          <Text>모두보기</Text>
        </Category>
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
