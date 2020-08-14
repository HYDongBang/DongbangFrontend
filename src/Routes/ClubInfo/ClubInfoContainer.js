import React, { useState } from "react";
import ClubInfoPresenter from "./ClubInfoPresenter";

export default () => {
  const [action, setAction] = useState("clubInfo");
  return <ClubInfoPresenter setAction={setAction} action={action} />;
};
