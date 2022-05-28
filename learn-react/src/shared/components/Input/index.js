import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({
  name,
  type,
  size,
  value: defaultValue,
  onChange: onChangeCallback,
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    onChangeCallback(e.target.value);
  };

  return (
    <input
      type={type}
      name={name}
      size={size}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  name: "",
  type: "text",
  size: "20px",
  value: "",
  onChange: () => {},
};

export default Input;
