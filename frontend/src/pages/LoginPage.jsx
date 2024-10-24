import "../sass/LoginPage.scss";
import LCKDLOGO from "../assets/Logo.svg";
import Eyeseeyou from "../assets/eyecansee.svg";
import Eyecantsee from "../assets/eyecantsee.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const runLoginAndNavigate = (e) => {
    e.preventDefault();
    if (!userName.length || !password.length) {
      alert("both username and password are required");
      setPassword("");
      setUserName("");
      return;
    }
    loginUser();
  };
  const loginUser = async () => {
    try {
      const response = await fetch(
        "https://6exm9a6aqe.execute-api.eu-north-1.amazonaws.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: userName, password: password }),
        }
      );
      const data = await response.json();
      console.log(data.data.token);
      sessionStorage.setItem("userName", userName);
      sessionStorage.setItem("lckdToken", data.data.token);
      if (!data.data.success) {
        setPassword("");
        setUserName("");
        alert(data.data.message);
      }
      navigate("/viewpasswords");
    } catch (error) {
      console.log(error);
      alert("failed to add user");
    }
  };

  return (
    <div className="login-main-container">
      <header>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </header>
      <div className="login-content">
        <img src={LCKDLOGO} alt="" />
        <h1>LCKD</h1>
        <h2>KEEPING YOUR PASSWORDS SAFE</h2>
      </div>
      <form className="login-forms" onSubmit={runLoginAndNavigate}>
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
        <img src={Eyecantsee} alt="" />
        <button type="submit">LET ME IN</button>
      </form>
    </div>
  );
};

export default LoginPage;
