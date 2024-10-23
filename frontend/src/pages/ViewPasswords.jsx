import "../sass/ViewPasswords.scss";
import LogoHeader from "../components/logoComponent.jsx";
import CopyLogo from "../assets/copylogo.svg";
import Storedpsws from "../components/StorePswComponent.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { jwt } from "jsonwebtoken";
const ViewPasswords = () => {
  const navigate = useNavigate();
  const sessionToken = sessionStorage.getItem("lckdToken");
  // const token = jwt.verify(sessionToken, "asdf0987");
  // const handleClick = (path) => {
  //   navigate(path);
  // };
  // useEffect(() => {
  //   const fetchData = async () => {};
  // });

  return (
    <div className="viewPasswords-main-container">
      <LogoHeader />
      <div className="storedPasswords-box">
        <p className="storedPassword-text">STORED PASSWORDS</p>
        <div className="component-box">
          <Storedpsws />
        </div>
      </div>
      <div className="plainSight-box">
        <p className="sight-text">PLAIN SIGHT</p>
        <div>
          <p className="sight-text-two">ranodiwdwadwa</p>
          <img src={CopyLogo} alt="" />
        </div>
      </div>
      <button onClick={() => handleClick("/newlckd")}>NEW LCKD</button>
    </div>
  );
};

export default ViewPasswords;
