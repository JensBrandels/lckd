import EditLogo from "../assets/editlogo.png";
import Iseeyou from "../assets/eyecansee.svg";
import "../sass/StorePswComponent.scss";

const StorePswComponent = ({ onClickAction }) => {
  return (
    <div className="psw-component-container">
      <p className="url">www.google.com</p>
      <div className="psw-img">
        <img onClick={onClickAction} src={EditLogo} alt="" />
        <img src={Iseeyou} alt="" />
      </div>
    </div>
  );
};

export default StorePswComponent;
