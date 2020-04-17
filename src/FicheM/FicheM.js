import React from "react";
import { Link } from "react-router-dom";
import Style from "./FicheM.module.css";

function FicheM({ titre, description, date_modif, fiche_id }) {
  //commentaire

  return (
    <div className={Style.FicheM}>
      <Link to={`/fiche/${fiche_id}`}>
        <h1 className={Style.Titre}>{titre}</h1>
        <p className={Style.Texte}>{description}</p>
        <p className={Style.LireFiche}>Lire la suite</p>
        <p>{date_modif}</p>
      </Link>
    </div>
  );
}

export default FicheM;
