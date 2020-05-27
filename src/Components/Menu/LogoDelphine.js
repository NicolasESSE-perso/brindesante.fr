import React from "react";
import ImgLogo from "../../Images/Logo300.png";
import Style from "./LogoDelphine.module.css";

function LogoDelphine() {
  return (
    <div className={Style.FondLogo}>
      <img
        style={{ width: "150px", height: "150px" }}
        src={ImgLogo}
        alt="Logo"
      />
    </div>
  );
}

export default LogoDelphine;
