import "../sass/LoginPage.scss";
import LCKDLOGO from "../assets/Logo.svg";
import Eyeseeyou from "../assets/eyecansee.svg";
import Eyecantsee from "../assets/eyecantsee.svg";
import handleForm from "../functions/formHandler";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const runLoginAndNavigate = (e) => {
    e.preventDefault();
    const check = handleForm();
    if (check) {
      navigate("/");
    } else {
      alert("username or password is wrong");
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
        <input type="text" name="username" id="username" />
        <label htmlFor="password">PASSWORD</label>
        <input type="text" name="password" id="password" />
        <img src={Eyecantsee} alt="" />
        <button type="submit">LET ME IN</button>
      </form>
    </div>
  );
};

export default LoginPage;
