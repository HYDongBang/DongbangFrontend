import React, { useState } from "react";
import MainPresenter from "./MainPresenter";

export default () => {
  const [myType, setType] = useState("");

  return <MainPresenter myType={myType} setType={setType} />;
};
