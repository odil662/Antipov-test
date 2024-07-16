import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import { validateEmail, validatePassword } from "../helpers/validations";

const form = document.querySelector("form");
const LoginPage: React.FC = () => {
  const [authCard, setAuthCard] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleRegistration = () => {
    validateEmail(setError)(error, authCard.email);
    validatePassword(setError)(error, authCard.password);
  };

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
            errorMessage={error.email}
            authCard={authCard}
            setAuthCard={setAuthCard}
          />
          <Input
            type="password1"
            label="Пароль"
            placeholder="Введите пароль"
            required={true}
            errorMessage={error.password}
            authCard={authCard}
            setAuthCard={setAuthCard}
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
