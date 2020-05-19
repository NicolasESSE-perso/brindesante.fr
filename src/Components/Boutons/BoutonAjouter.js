import React from "react";
import IconeAjouter from "../../Images/icones/Ajouter.svg";
import Style from "./BoutonAjouter.module.css";

function BoutonAjouter({ texte, onClick, isVisible, color }) {
  let bgColor = color;
  if (!bgColor) {
    bgColor = "#e8e098";
  }

  if (isVisible) {
    return (
      <div
        className={Style.BoutonAjouter}
        onClick={onClick}
        style={{ backgroundColor: bgColor }}
      >
        <img src={IconeAjouter} alt="" />
        {Boolean(texte) && <p className={Style.Texte}>{texte}</p>}
      </div>
    );
  } else {
    return "";
  }
}

export default BoutonAjouter;
