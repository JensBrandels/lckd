import "../sass/NewLckd.scss";
import LogoHeader from "../components/logoComponent.jsx";
import FormComponent from "../components/formComponent.jsx";
import addNewLckd from "../functions/newLockedHandler";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const navigate = useNavigate();
  const createLckdAndNavigate = (e) => {
    e.preventDefault();
    const check = addNewLckd();

    if (check) {
      navigate("/");
    } else {
      alert("username, password and url required");
    }
  };
  return (
    <div className="newlckd-main-container">
      <LogoHeader />
      <div>
        <h2 className="newlckd-text">EDIT YOUR CREDENTIALS</h2>
      </div>
      <div>
        <FormComponent
          submitButtonText="UPDATE LCKD"
          onSubmitAction={createLckdAndNavigate}
        />
      </div>
    </div>
  );
};

export default EditPage;
