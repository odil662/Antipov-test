import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import Input from "../Components/Input";

const RegisterPage: FC = () => {
  const matchFields = (pass1: string, pass2: string) => {
    return pass1 === pass2;
  };

  const handleRegistration = (item: any) => {
    item.preventDefault();
  };

  return (
    <div className="registration">
      <form id="form" onSubmit={(e) => handleRegistration(e)}>
        <h2>Регистрация</h2>
        <Input type="text" label="Имя" placeholder="Ваше имя" required={true} />
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
        <Input
          type="password"
          label="Подтвердите пароль"
          placeholder="Введите пароль"
          required={true}
        />
        <input
          className="input-submit"
          type="submit"
          value={"Зарегистрироваться"}
        />
      </form>
      <p>
        Уже зарегистрированы ? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
