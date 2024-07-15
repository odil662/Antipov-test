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

export const validateEmptyField =
  (setError: (error: string) => void) => (value: string) => {
    if (value.trim() === "") {
      setError("Поле не может быть пустым");
    } else {
      setError("");
    }
  };
