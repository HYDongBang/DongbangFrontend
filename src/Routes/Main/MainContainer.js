import React, { useState } from "react";
import MainPresenter from "./MainPresenter";
import { useQuery } from "react-apollo-hooks";
import { GET_CLUBS } from "./MainQueries";

export default () => {
  const [myType, setType] = useState("");
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([]);

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
