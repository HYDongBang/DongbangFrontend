import React from "react";
import styled from "styled-components";
import styles from "../Styles/Loading.css";

const Container = styled.div`
  width: 100%;
  height: 500px;
`;
const Loader = styled.div``;

const Loading = () => (
  <Container>
    <Loader className="loader"></Loader>
  </Container>
);

export default Loading;
