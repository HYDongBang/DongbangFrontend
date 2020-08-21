import React from "react";
import { gql } from "apollo-boost";
import { ThemeProvider } from "styled-components";
import { useQuery } from "react-apollo-hooks";
import GlobalStyles from "../Styles/GlobalStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Theme from "../Styles/Theme";
import Router from "./Router";
import Footer from "./Footer";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router />
      <Footer />
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </ThemeProvider>
  );
};
