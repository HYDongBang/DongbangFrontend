import React from "react";
import styled from "styled-components";
import styles from "../Styles/Loading.css";

const Container = styled.div`
  width: 100%;
  background-color: transparent;
`;
const Loader = styled.div``;

const Loading = () => (
  <Container>
    <div className="wrapper">
      <span className="circle circle-1"></span>
      <span className="circle circle-2"></span>
      <span className="circle circle-3"></span>
      <span className="circle circle-4"></span>
      <span className="circle circle-5"></span>
      <span className="circle circle-6"></span>
      <span className="circle circle-7"></span>
      <span className="circle circle-8"></span>
    </div>
  </Container>
);

export default Loading;
