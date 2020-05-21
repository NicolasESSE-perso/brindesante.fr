import React from "react";
import ImgLogo from "../../Images/Logo150.png";
import Style from "./LogoDelphine.module.css";

function LogoDelphine() {
  return (
    <div className={Style.FondLogo}>
      <img src={ImgLogo} alt="Logo" />
    </div>
  );
}

export default LogoDelphine;
