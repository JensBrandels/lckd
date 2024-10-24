import React from "react";
import LCKDLOGO from "../assets/Logo.svg";
import "../sass/SignupPage.scss";
import { useNavigate } from "react-router-dom";
// import handleForm from "../functions/formHandler";
import { useState } from "react";
const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const runSignUpAndNavigate = (e) => {
    e.preventDefault();
    if (!userName.length || !password.length) {
      alert("username and password is required");
      setPassword("");
      setUserName("");
      return;
    }
    addUserToDb();
  };
  const addUserToDb = async () => {
    try {
      const response = await fetch(
        "https://6exm9a6aqe.execute-api.eu-north-1.amazonaws.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: userName, password: password }),
        }
      );
      const data = await response.json();
      console.log(data.data.message);
      if (!data.data.success) {
        setPassword("");
        setUserName("");
        alert(data.data.message);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("failed to add user");
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
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
        />
        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </div>
  );
};

export default SignupPage;
