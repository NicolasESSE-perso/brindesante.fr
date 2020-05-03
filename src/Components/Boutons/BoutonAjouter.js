import React from "react";
import IconeAjouter from "../../Images/icones/Ajouter.svg";
import Style from "./BoutonAjouter.module.css";

function BoutonAjouter({ texte, onClick, isVisible }) {
  if (isVisible) {
    return (
      <div className={Style.BoutonAjouter} onClick={onClick}>
        <img src={IconeAjouter} alt="" />
        <p>{texte}</p>
      </div>
    );
  } else {
    return "";
  }
}

export default BoutonAjouter;
