import React, { useState } from "react";
import ClubActivity from "./ClubActivity";

export default ({ club }) => {
  const [action, setAction] = useState("");

  return <ClubActivity club={club} action={action} setAction={setAction} />;
};
