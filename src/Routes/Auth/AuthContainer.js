import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
} from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const name = useInput("");
  const phoneNumber = useInput("");
  const email = useInput("");
  const secret = useInput("");
  const requestSecret = useMutation(LOG_IN, {
    variables: { email: email.value },
  });

  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value },
  });

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      name: name.value,
      phoneNumber: phoneNumber.value,
    },
  });

  const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    },
  });
  const localLogInMutation = useMutation(LOCAL_LOG_IN);

  //제출
  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("You dont have an account yet, create one");
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            toast.success("Check your inbox for your login secret");
            setAction("confirm");
          }
        } catch {
          toast.error("Can't request secret, try again");
        }
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signUp") {
      if (email.value !== "" && name.value !== "" && phoneNumber.value !== "") {
        try {
          const {
            data: { createAccount },
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("Can't create account");
          } else {
            toast.success("Account created! Log In now");
          }
        } catch {
          toast.error("Can't create account, try again");
        }
      } else {
        toast.error("All field are required");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token },
          } = await confirmSecretMutation();
          if (token !== "" && token !== undefined) {
            //token을 변수로 제공
            localLogInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error("Cant confirm secret,check again");
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      name={name}
      phoneNumber={phoneNumber}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
