import React, { useState, useEffect } from "react";
import { InputTypesProps } from "../Types/types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({
  required,
  type,
  placeholder,
  label,
  errorMessage,
  authCard,
  setAuthCard,
}: InputTypesProps) => {
  const [value, setInputValue] = useState("");
  const [isPassShow, setIsPassShow] = useState(false);

  useEffect(() => {
    switch (type) {
      case "text":
        return setAuthCard({ ...authCard, name: value });
      case "email":
        return setAuthCard({ ...authCard, email: value });
      case "password":
        return setAuthCard({ ...authCard, password: value });
      case "confirmPassword":
        return setAuthCard({ ...authCard, confirmPassword: value });
    }
  }, [value]);

  return (
    <>
      <label>
        {label}
        {type === "password" || type === "confirmPassword" ? (
          <span className="inputPassword">
            <input
              className="input"
              type={isPassShow ? "text" : "password"}
              placeholder={placeholder}
              value={value}
              onChange={(e) => setInputValue(e.target.value)}
              required={required}
            />
            <i className="inputPasswordIcon">
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
        {errorMessage ? <span className="error-text">{errorMessage}</span> : ""}
      </label>
    </>
  );
};

export default Input;
