import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import { validateEmail, validatePassword } from "../helpers/validations";
import { OrderContext } from "../Components/Context";

const form = document.querySelector("form");
const LoginPage: React.FC = () => {
  const {
    authCard,
    setAuthCard,
    emailValidationError,
    setEmailValidationError,
    passwordValidationError,
    setPasswordValidationError,
  } = useContext(OrderContext);

  const handleRegistration = () => {
    validateEmail(setEmailValidationError)(authCard.email);
    validatePassword(setPasswordValidationError)(authCard.password1);
  };

  console.log(emailValidationError, passwordValidationError);
  return (
    <div className="container authContainer">
      <div className="card authCard">
        <form className="form">
          <div className="formTitle">Войти</div>
          <Input
            type="email"
            label="Электронная почта"
            placeholder="example@mail.ru"
            required={true}
            errorMessage={emailValidationError}
          />
          <Input
            type="password1"
            label="Пароль"
            placeholder="Введите пароль"
            required={true}
            errorMessage={passwordValidationError}
          />
        </form>
        <button className="btnSubmit" onClick={handleRegistration}>
          Войти
        </button>
        <p className="loginLink">
          Ещё не зарегистрированы ? <Link to="/register">Регистрация</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
