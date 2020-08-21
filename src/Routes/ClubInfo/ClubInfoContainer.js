import React, { useState } from "react";
import ClubInfoPresenter from "./ClubInfoPresenter";

export default ({ club }) => {
  const [action, setAction] = useState("clubInfo");

  return (
    <ClubInfoPresenter action={action} setAction={setAction} club={club} />
  );
};
