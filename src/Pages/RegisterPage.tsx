import { FC, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import { OrderContext } from "../Components/Context";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../helpers/validations";

const form = document.querySelector("form");
const RegisterPage: FC = () => {
  const {
    authCard,
    setAuthCard,
    nameValidationError,
    setNameValidationError,
    emailValidationError,
    setEmailValidationError,
    passwordValidationError,
    setPasswordValidationError,
  } = useContext(OrderContext);
  console.log(authCard);
  const handleRegistration = () => {
    validateName(setNameValidationError)(authCard.name);
    validateEmail(setEmailValidationError)(authCard.email);
    validatePassword(setPasswordValidationError)(
      authCard.password1,
      authCard.password2
    );
  };

  return (
    <div className="container authContainer">
      <div className="card authCard">
        <form className="form">
          <div className="formTitle">Регистрация</div>
          <Input
            type="text"
            label="Имя"
            placeholder="Ваше имя"
            required={true}
            errorMessage={nameValidationError}
          />
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
          <Input
            type="password2"
            label="Подтвердите пароль"
            placeholder="Введите пароль"
            required={true}
            errorMessage={passwordValidationError}
          />
        </form>
        <button className="btnSubmit" onClick={handleRegistration}>
          Зарегистрироваться
        </button>
        <p className="registerLink">
          Уже зарегистрированы ? <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
