import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.textarea`
    width: 750px;
    height: 100px;
    border: 1px solid ${props => props.theme.grayColor};
    background-color: ${props => props.theme.bgColor};
    padding: 5px;
    margin-left: 13px;
`;

const Textarea = ({
  placeholder,
  required = true,
  value,
  onChange
}) => (
  <Container
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
  />
);

Textarea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Textarea;

