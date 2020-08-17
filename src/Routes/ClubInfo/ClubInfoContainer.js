import React, { useState } from "react";
import ClubInfoPresenter from "./ClubInfoPresenter";

export default ({ id }) => {
  const [action, setAction] = useState("clubInfo");

  //수정해야함 일단 긁어옴
  const messageSubmit = (e) => {
    e.preventDefault();

    if (this.state.messaging) return;

    const content =
      this.state.messageContent && this.state.messageContent.trim();
    if (!content) return;

    this.setState((state) => ({ ...state, messaging: true }));

    this.props.message({ content }).then(() => {
      this.setState((state) => ({ ...state, messageContent: null }));
      this.inputMessageInputRef.focus();

      // forbide too much talker
      setTimeout(() => {
        this.setState((state) => ({ ...state, messaging: false }));
      }, 250);
    });
  };

  return <ClubInfoPresenter action={action} setAction={setAction} id={id} />;
};
