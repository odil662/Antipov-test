import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";

const form = document.querySelector("form");
const RegisterPage: FC = () => {
  const matchFields = (pass1: string, pass2: string) => {
    return pass1 === pass2;
  };

  const handleRegistration = (item: any) => {
    item.preventDefault();
    // if (item.target[2].value !== item.target[3].value) {
    //   alert("Пароли не совпадают");
    // } else {
    // }

    console.log(form);
  };

  return (
    <div className="container authContainer">
      <div className="card authCard">
        <form className="form" onSubmit={(e) => handleRegistration(e)}>
          <div>Регистрация</div>
          <Input
            type="text"
            label="Имя"
            placeholder="Ваше имя"
            required={true}
          />
          <Input
            type="email"
            label="Электронная почта"
            placeholder="example@mail.ru"
            required={true}
          />
          <Input
            type="password1"
            label="Пароль"
            placeholder="Введите пароль"
            required={true}
          />
          <Input
            type="password2"
            label="Подтвердите пароль"
            placeholder="Введите пароль"
            required={true}
          />
        </form>
        <button className="btnSubmit" onClick={handleRegistration}>
          Зарегистрироваться
        </button>
        <p className="loginLink">
          Уже зарегистрированы ? <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
