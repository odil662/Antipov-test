import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isPassShow, setIsPassShow] = useState(false);

  const changeEmail = (value: string) => {
    setEmail(value);
  };
  const changePass = (value: string) => {
    setPass(value);
  };

  console.log(email, pass);

  const handleRegistration = (item: any) => {
    item.preventDefault();
  };

  return (
    <div className="entrance">
      <form id="form">
        <h2>Войти</h2>
        <label htmlFor="email">Электронная почта</label>
        <input
          type="email"
          id="email"
          placeholder="example@mail.ru"
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          required
        />
        <label htmlFor="pass">Пароль</label>
        <span className="password">
          <input
            type={isPassShow ? "text" : "password"}
            id="pass"
            placeholder="Введите пароль"
            value={pass}
            onChange={(e) => changePass(e.target.value)}
            required
          />
          <i className="password-control">
            {isPassShow ? (
              <FaRegEye onClick={() => setIsPassShow(!isPassShow)} />
            ) : (
              <FaRegEyeSlash onClick={() => setIsPassShow(!isPassShow)} />
            )}
          </i>
        </span>
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
