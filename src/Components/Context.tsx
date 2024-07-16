import React, { useState, createContext, ReactNode } from "react";

type OrderContextType = any;

export const OrderContext = createContext<OrderContextType | null>(null);

const Context = ({ children }: { children: ReactNode }) => {
  const [authCard, setAuthCard] = useState({});
  const [nameValidationError, setNameValidationError] = useState("");
  const [emailValidationError, setEmailValidationError] = useState("");
  const [passwordValidationError, setPasswordValidationError] = useState("");
  const [confirmPasswordValidationError, setConfirmPasswordValidationError] =
    useState("");

  //нужно перенести на объект все ошибки

  const value = {
    authCard,
    setAuthCard,
    nameValidationError,
    setNameValidationError,
    emailValidationError,
    setEmailValidationError,
    passwordValidationError,
    setPasswordValidationError,
    confirmPasswordValidationError,
    setConfirmPasswordValidationError,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export default Context;
