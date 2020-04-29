import React from "react";
import IconeAjouter from "../../Images/icones/Ajouter.svg";
import Style from "./BoutonAjouter.module.css";

function BoutonAjouter({ texte, onClick }) {
  return (
    <div className={Style.BoutonAjouter} onClick={onClick}>
      <img src={IconeAjouter} alt="" />
      <p>{texte}</p>
    </div>
  );
}

export default BoutonAjouter;
