import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
    width: 300px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.darkGrayColor};
    background-color: ${props => props.theme.bgColor};
    padding: 8px 10px;
    text-align: center;
    font-size: 1.2em;
`;

const FormTitle = ({
  placeholder,
  required = true,
  value,
  onChange,
  name = "",
  type = "text",
}) => (
  <Container
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    name={name}
    type={type}
  />
);

FormTitle.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default FormTitle;

