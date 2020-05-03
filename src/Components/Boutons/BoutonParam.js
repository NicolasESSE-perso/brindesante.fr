import React from "react";
import IconeParam from "../../Images/icones/Param.svg";
import Style from "./BoutonParam.module.css";
import { Link } from "react-router-dom";

function BoutonParam({ isVisible }) {
  if (isVisible) {
    return (
      <Link to="/param">
        <div className={Style.BoutonParam}>
          <img src={IconeParam} alt="" />
        </div>
      </Link>
    );
  } else {
    return "";
  }
}

export default BoutonParam;
