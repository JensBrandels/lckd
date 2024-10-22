import React from "react";
import LCKDLOGO from "../assets/Logo.svg";
import "../sass/SignupPage.scss";
import { useNavigate } from "react-router-dom";
import handleForm from "../functions/formHandler";

const SignupPage = () => {
  const navigate = useNavigate();

  const runSignUpAndNavigate = (e) => {
    e.preventDefault();
    const check = handleForm();

    if (check) {
      navigate("/");
    } else {
      alert("username or password is required");
    }
  };

  return (
    <div className="signup-main-container">
      <div className="login-content">
        <img src={LCKDLOGO} alt="" />
        <h1>LCKD</h1>
        <h2>KEEPING YOUR PASSWORDS SAFE</h2>
        <h3>SIGN UP</h3>
      </div>
      <form className="login-forms" onSubmit={runSignUpAndNavigate}>
        <label htmlFor="username">USERNAME</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">PASSWORD</label>
        <input type="text" name="password" id="password" />
        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </div>
  );
};

export default SignupPage;
