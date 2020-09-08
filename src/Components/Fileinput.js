import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Fileinput = ({
  placeholder,
  required = false,
  className,
  value,
  onChange,
  type = "text",
  disabled = true
}) => (
  <input
    placeholder={placeholder}
    required={required}
    value={value}
    className={className}
    onChange={onChange}
    type={type}
    disabled={disabled}
  />
);

Fileinput.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool.isRequired
};

export default Fileinput;
