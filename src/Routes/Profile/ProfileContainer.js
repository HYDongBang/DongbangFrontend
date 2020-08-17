import React, { useState } from "react";
import ProfilePresenter from "./ProfilePresenter";

export default () => {
    const [action, setAction] = useState("profile");
    return <ProfilePresenter action={action} setAction={setAction}/>;
};