import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../helpers/validations";

const form = document.querySelector("form");
const RegisterPage: FC = () => {
  const [authCard, setAuthCard] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(authCard);

  const handleRegistration = () => {
    validateName(setError)(error, authCard.name);
    validateEmail(setError)(error, authCard.email);
    validatePassword(setError)(
      error,
      authCard.password,
      authCard.confirmPassword
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
            errorMessage={error.name}
            authCard={authCard}
            setAuthCard={setAuthCard}
          />
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
            type="password"
            label="Пароль"
            placeholder="Введите пароль"
            required={true}
            errorMessage={error.password}
            authCard={authCard}
            setAuthCard={setAuthCard}
          />
          <Input
            type="confirmPassword"
            label="Подтвердите пароль"
            placeholder="Введите пароль"
            required={true}
            errorMessage={error.confirmPassword}
            authCard={authCard}
            setAuthCard={setAuthCard}
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
