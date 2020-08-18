import React, { useState } from "react";
import MainPresenter from "./MainPresenter";
import { useQuery } from "react-apollo-hooks";
import { GET_CLUBS } from "./MainQueries";

export default () => {
  const [myType, setType] = useState("");
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([]);

  // const { clubs } = data;

  // const clubs = [
  //   {
  //     id: 1,
  //     name: "안녕",
  //     type: "Art",
  //   },
  //   {
  //     id: 2,
  //     name: "반가워",
  //     type: "Academic",
  //   },
  //   {
  //     id: 3,
  //     name: "감자",
  //     type: "Friendship",
  //   },
  //   {
  //     id: 4,
  //     name: "고구마",
  //     type: "Unite",
  //   },
  //   {
  //     id: 5,
  //     name: "호박",
  //     type: "Etc",
  //   },
  // ];

  return (
    <MainPresenter
      myType={myType}
      setType={setType}
      word={word}
      setWord={setWord}
      filterDisplay={filterDisplay}
      setFilterDisplay={setFilterDisplay}
    />
  );
};
