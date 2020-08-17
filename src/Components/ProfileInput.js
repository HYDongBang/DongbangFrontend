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
  type = "text",
}) => (
  <Container
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
  />
);

ProfileInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default ProfileInput;

