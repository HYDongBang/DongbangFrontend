import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.textarea`
  width: 80%;
  border: none;
  padding: 5px 10px;
`;

const ClubActivityInput = ({
  cols,
  rows,
  placeholder,
  required = true,
  value,
  onChange,
  name = "",
  type = "text",
}) => (
  <Container
    cols={cols}
    rows={rows}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    name={name}
    type={type}
  />
);

ClubActivityInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  cols: PropTypes.string,
  rows: PropTypes.string,
};

export default ClubActivityInput;
