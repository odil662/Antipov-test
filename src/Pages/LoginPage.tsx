import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import Input from "../Components/Input";
import { validateEmail, validateEmptyField } from "../helpers/validations";

const form = document.querySelector("form");
const LoginPage: React.FC = () => {
  const [emailValidationError, setEmailValidationError] = useState("");
  const [passwordValidationError, setPasswordValidationError] = useState("");

  const handleRegistration = (item: any) => {
    item.preventDefault();
    const emailValue = item.target[0].value;
    const passwordValue = item.target[1].value;
    validateEmail(setEmailValidationError)(emailValue);
    validateEmptyField(setPasswordValidationError)(passwordValue);
  };

  console.log(emailValidationError, passwordValidationError);
  return (
    <div className="entrance">
      <form id="form" onSubmit={(e) => handleRegistration(e)}>
        <h2>Войти</h2>
        <Input
          type="email"
          label="Электронная почта"
          placeholder="example@mail.ru"
          required={true}
        />
        <Input
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          required={true}
        />
        <input type="submit" className="input-submit" value={"Войти"} />
      </form>
      <p>
        Ещё не зарегистрированы ? <Link to="/register">Регистрация</Link>
      </p>
    </div>
  );
};

export default LoginPage;
