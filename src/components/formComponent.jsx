import "../sass/FormComponent.scss";
import refreshLogo from "../assets/ingetmellanslag.svg";

const formComponent = ({ submitButtonText, onSubmitAction }) => {
  return (
    <form className="login-forms" onSubmit={onSubmitAction}>
      <label className="www" htmlFor="www">
        WWW
      </label>
      <input type="text" name="www" id="www" />
      <label htmlFor="username">USERNAME</label>
      <input type="text" name="username" id="username" />
      <label className="securepsw" htmlFor="securepassword">
        SECURE PASSWORD
      </label>
      <input type="text" name="securepassword" id="securepassword" />
      <img className="refresh" src={refreshLogo} alt="" />
      <p className="symbols">
        # @ 123 Aa <span>pwnd</span>
      </p>
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};

export default formComponent;
