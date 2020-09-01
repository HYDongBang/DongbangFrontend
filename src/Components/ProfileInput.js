import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
    width: 300px;
    border: none;
    background-color: ${props => props.theme.bgColor};
    padding: 5px 10px;
`;

const ProfileInput = ({
  placeholder,
  required = true,
  value,
  onChange,
  name = "",
  type = "text",
  id = ""
}) => (
  <Container
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    name={name}
    type={type}
    id={id}
  />
);

ProfileInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default ProfileInput;

