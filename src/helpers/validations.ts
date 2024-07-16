import React from "react";

export const validateEmail =
  (setError: (error: any) => void) => (error: object, email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError({ ...error, email: "Поле email не должно быть пустым" });
    } else if (!emailRegex.test(email)) {
      setError({ ...error, email: "Некорректный email" });
    } else {
      setError({ ...error, email: "" });
    }
  };

export const validateName =
  (setError: (error: any) => void) =>
  (error: object, value: string | undefined) => {
    if (value === "" || value === undefined) {
      setError({ ...error, name: "Поле не может быть пустым" });
    } else {
      setError({ ...error, name: "" });
    }
  };

export const validatePassword =
  (setError: (error: any) => void) =>
  (error: object, pass1?: string, pass2?: string) => {
    if (pass1 && pass2) {
      if (pass1 !== pass2) {
        setError({
          ...error,
          password: "Пароли не совпадают",
          confirmPassword: "Пароли не совпадают",
        });
      } else {
        setError({ ...error, password: "", confirmPassword: "" });
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
