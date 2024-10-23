import logo from "../assets/Logo.svg";
import "../sass/LogoComponent.scss";

const logoComponent = () => {
  return (
    <header className="logoComponent">
      <img src={logo} alt="" />
      <h1>LCKD</h1>
    </header>
  );
};

export default logoComponent;
