import EditLogo from "../assets/editlogo.png";
import Iseeyou from "../assets/eyecansee.svg";
import "../sass/StorePswComponent.scss";

const StorePswComponent = (credential) => {
  return (
    <div className="psw-component-container">
      <p className="url">{credential.website}</p>
      <div className="psw-img">
        <img src={EditLogo} alt="" />
        <img src={Iseeyou} alt="" />
      </div>
    </div>
  );
};

export default StorePswComponent;
