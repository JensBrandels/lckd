import "../sass/NewLckd.scss";
import LogoHeader from "../components/logoComponent.jsx";
import FormComponent from "../components/formComponent.jsx";
import addNewLckd from "../functions/newLockedHandler";
import { useNavigate } from "react-router-dom";

const NewLckd = () => {
  const navigate = useNavigate();
  const createLckdAndNavigate = (e) => {
    e.preventDefault();
    const check = addNewLckd();

    if (check) {
      navigate("/viewpasswords");
    } else {
      alert("username, password and url required");
    }
  };
  return (
    <div className="newlckd-main-container">
      <LogoHeader />
      <div>
        <h2 className="newlckd-text">NEW SECURE CREDENTIALS</h2>
      </div>
      <div>
        <FormComponent
          submitButtonText="CREATE LCKD"
          onSubmitAction={createLckdAndNavigate}
        />
      </div>
    </div>
  );
};

export default NewLckd;
