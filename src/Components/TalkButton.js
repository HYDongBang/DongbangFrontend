import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.darkGrayColor};
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 12px 30px;
  border: 0;
  outline: 0;
  margin-left: -96px;

  transition: all 200ms ease-in;
  cursor: pointer;
  &:hover {
    border: 1px solid ${(props) => props.theme.blueColor};
    background-color: ${(props) => props.theme.blueColor};
    color: ${(props) => props.theme.whiteColor};
    transition: 0.3s;
  }
  &:active {
    background: #8cb0ff;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
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
