import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  display: inline-block;
  background: #8cb0ff;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 10px 33px;
  border: 0;
  outline: 0;
  float: right;

  transition: all 200ms ease-in;
  cursor: pointer;
  &:hover {
    background: darken(black, 10%);
  }
  &:active {
    background: #8cb0ff;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
`;

const InfoButton = ({ text, type, onClick }) => (
  <Container type={type} onClick={onClick}>
    {text}
  </Container>
);

InfoButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default InfoButton;

//5.2에서 복붙
