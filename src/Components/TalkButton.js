import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.lightgrayColor};
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);

  color: ${(props) => props.theme.blackColor};
  border-radius: 5px;
  padding: 13px 13px;
  border: 0;
  outline: 0;
  margin-left: 10px;

  transition: all 200ms ease-in;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.blueColor};
    color: ${(props) => props.theme.whiteColor};
    transition: 0.3s;
  }
  &:active {
    background: #8cb0ff;
  }
`;

const TalkButton = ({ text, type }) => (
  <Container type={type}>{text}</Container>
);

TalkButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default TalkButton;

//5.2에서 복붙
