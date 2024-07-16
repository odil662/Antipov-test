import React from "react";

export const validateEmail =
  (setError: (error: string) => void) => (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Поле email не должно быть пустым");
    } else if (!emailRegex.test(email)) {
      setError("Некорректный email");
    } else {
      setError("");
    }
  };

export const validateName =
  (setError: (error: string) => void) => (value: string | undefined) => {
    if (value === "" || value === undefined) {
      setError("Поле не может быть пустым");
    } else {
      setError("");
    }
  };

export const validatePassword =
  (setError: (error: string) => void) => (pass1?: string, pass2?: string) => {
    if (pass1 && pass2) {
      if (pass1 !== pass2) {
        setError("Пароли не совпадают");
      } else {
        setError("");
      }
    } else {
      if (
        pass1 === "" ||
        pass1 === undefined ||
        pass2 === "" ||
        pass2 === undefined
      ) {
        setError("Поле не может быть пустым");
      } else {
        setError("");
      }
    }
  };
