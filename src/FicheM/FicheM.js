import React from "react";
import { Link } from "react-router-dom";
import Style from "./FicheM.module.css";

function FicheM(props) {
  //commentaire

  return (
    <div className={Style.FicheM}>
      <Link to={`/fiche/${props.fiche_id}`}>
        <h1>{props.titre}</h1>
        <p>{props.description}</p>
        <p>{props.date_modif}</p>
      </Link>
    </div>
  );
}

export default FicheM;
