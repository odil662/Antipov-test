import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import Input from "../Components/Input";

const LoginPage: React.FC = () => {
  const handleRegistration = (item: any) => {
    item.preventDefault();
    console.log(item);
  };

  return (
    <div className="entrance">
      <form id="form">
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
      </form>
      <input
        type="submit"
        onClick={(e) => handleRegistration(e)}
        value={"Войти"}
      />
      <p>
        Ещё не зарегистрированы ? <Link to="/register">Регистрация</Link>
      </p>
    </div>
  );
};

export default LoginPage;
