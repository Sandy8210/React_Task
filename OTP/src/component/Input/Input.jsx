import React from "react";
import "./Input.css";

const Input = ({
  type,
  className,
  onChange,
  value,
  Name,
  Id,
  maxLength,
  onKeyDown,
}) => {
  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
      value={value}
      name={Name}
      id={Id}
      maxLength={maxLength}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
