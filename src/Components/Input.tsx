import React, { useState, useContext, useEffect } from "react";
import { InputTypesProps } from "../Types/types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { OrderContext } from "./Context";

const Input = ({ required, type, placeholder, label }: InputTypesProps) => {
  const [value, setInputValue] = useState("");
  const [isPassShow, setIsPassShow] = useState(false);
  const { authCard, setAuthCard } = useContext(OrderContext);

  useEffect(() => {
    switch (type) {
      case "text":
        return setAuthCard({ ...authCard, name: value });
      case "email":
        return setAuthCard({ ...authCard, email: value });
      case "password1":
        return setAuthCard({ ...authCard, password1: value });
      case "password2":
        return setAuthCard({ ...authCard, password2: value });
    }
  }, [value]);

  return (
    <>
      <label>
        {label}
        {type === "password1" || type === "password2" ? (
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
      </label>
    </>
  );
};

export default Input;
