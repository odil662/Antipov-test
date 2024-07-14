import React, { useState } from "react";
import { InputTypesProps } from "../Types/types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ required, type, placeholder, label }: InputTypesProps) => {
  const [value, setInputValue] = useState("");
  const [isPassShow, setIsPassShow] = useState(false);

  return (
    <>
      <label>
        {label}
        {type === "password" ? (
          <span className="password">
            <input
              className="input"
              type={isPassShow ? "text" : type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => setInputValue(e.target.value)}
              required={required}
            />
            <i className="password-control">
              {isPassShow ? (
                <FaRegEye onClick={() => setIsPassShow(!isPassShow)} />
              ) : (
                <FaRegEyeSlash onClick={() => setIsPassShow(!isPassShow)} />
              )}
            </i>
          </span>
        ) : (
          <input
            className="input"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setInputValue(e.target.value)}
            required={required}
          />
        )}
      </label>
    </>
  );
};

export default Input;
