import "../sass/LoginPage.scss";
import LCKDLOGO from "../assets/Logo.svg";
import Eyeseeyou from "../assets/eyecansee.svg";
import Eyecantsee from "../assets/eyecantsee.svg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(path);
  }

  return (
    <div className="login-main-container">
      <header>
        <button onClick={() => handleClick("/signup")}>Sign up</button>
      </header>
      <div className="login-content">
        <img src={LCKDLOGO} alt="" />
        <h1>LCKD</h1>
        <h2>KEEPING YOUR PASSWORDS SAFE</h2>
      </div>
      <form className="login-forms">
        <label htmlFor="username">USERNAME</label>
        <input type="text" name="username" id="" />
        <label htmlFor="password">PASSWORD</label>
        <input type="text" name="password" id="" />
        <img src={Eyecantsee} alt="" />
        <button type="submit">LET ME IN</button>
      </form>
    </div>
  );
};

export default LoginPage;
