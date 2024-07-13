import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

// import InputList from "../Components/InputList";
// const inputTypes = ["name", "email", "pass1", "pass2"];

const RegisterPage: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [isPass1Show, setIsPass1Show] = useState(false);
  const [isPass2Show, setIsPass2Show] = useState(false);

  const changeName = (value: string) => {
    setName(value);
  };
  const changeEmail = (value: string) => {
    setEmail(value);
  };
  const changePass1 = (value: string) => {
    setPass1(value);
  };
  const changePass2 = (value: string) => {
    setPass2(value);
  };
  console.log(name, email, pass1, pass2);
  const matchFields = (pass1: string, pass2: string) => {
    return pass1 === pass2;
  };

  const handleRegistration = (item: any) => {
    item.preventDefault();
  };

  return (
    <div className="registration">
      <form id="form">
        <h2>Регистрация</h2>
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          id="name"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => changeName(e.target.value)}
          required
        />
        <label htmlFor="email">Электронная почта</label>
        <input
          type="email"
          id="email"
          placeholder="example@mail.ru"
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          required
        />
        <label htmlFor="pass1">Пароль</label>
        <span className="password">
          <input
            type={isPass1Show ? "text" : "password"}
            id="pass1"
            placeholder="Введите пароль"
            value={pass1}
            onChange={(e) => changePass1(e.target.value)}
            required
          />
          <i className="password-control">
            {isPass1Show ? (
              <FaRegEye onClick={() => setIsPass1Show(!isPass1Show)} />
            ) : (
              <FaRegEyeSlash onClick={() => setIsPass1Show(!isPass1Show)} />
            )}
          </i>
        </span>
        <label htmlFor="pass2">Подтвердите пароль</label>
        <span className="password">
          <input
            type={isPass2Show ? "text" : "password"}
            id="pass2"
            placeholder="Введите пароль"
            value={pass2}
            onChange={(e) => changePass2(e.target.value)}
            required
          />
          <i className="password-control">
            {isPass2Show ? (
              <FaRegEye onClick={() => setIsPass2Show(!isPass2Show)} />
            ) : (
              <FaRegEyeSlash onClick={() => setIsPass2Show(!isPass2Show)} />
            )}
          </i>
        </span>
      </form>
      <input
        type="submit"
        onClick={(e) => handleRegistration(e)}
        value={"Зарегистрироваться"}
      />
      <p>
        Уже зарегистрированы ? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
