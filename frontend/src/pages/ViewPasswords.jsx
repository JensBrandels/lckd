import "../sass/ViewPasswords.scss";
import LogoHeader from "../components/logoComponent.jsx";
import CopyLogo from "../assets/copylogo.svg";
import Storedpsws from "../components/StorePswComponent.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewPasswords = () => {
  const navigate = useNavigate();
  const [storedPasswords, setStoredPasswords] = useState([]);

  const fetchData = async (userName) => {
    try {
      const response = await fetch(
        `https://6exm9a6aqe.execute-api.eu-north-1.amazonaws.com/api/getstoredpasswords`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: userName }),
        }
      );
      const data = await response.json();
      console.log(data);
      setStoredPasswords(data.data.credentials);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const userName = sessionStorage.getItem("userName");

    console.log(userName);
    if (userName) {
      fetchData(userName);
    } else {
      return;
    }
  }, []);

  return (
    <div className="viewPasswords-main-container">
      <LogoHeader />
      <div className="storedPasswords-box">
        <p className="storedPassword-text">STORED PASSWORDS</p>
        <div className="component-box">
          {storedPasswords.map((credential, i) => (
            <Storedpsws key={i} {...credential} />
          ))}
        </div>
      </div>
      <div className="plainSight-box">
        <p className="sight-text">PLAIN SIGHT</p>
        <div>
          <p className="sight-text-two">ranodiwdwadwa</p>
          <img src={CopyLogo} alt="" />
        </div>
      </div>
      <button onClick={() => navigate("/newlckd")}>NEW LCKD</button>
    </div>
  );
};

export default ViewPasswords;
