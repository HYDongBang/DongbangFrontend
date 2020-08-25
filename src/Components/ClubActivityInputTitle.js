import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
  width: 90%;
  border: none;
  padding: 5px 10px;
`;

const ClubActivityInputTitle = ({
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

ClubActivityInputTitle.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default ClubActivityInputTitle;
