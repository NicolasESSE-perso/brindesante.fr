import React from "react";
import { Link } from "react-router-dom";
import Style from "./LienFiche.module.css";

function Lienfiche(props) {
  if (props.is_masque) {
    return (
      <Link to={`/fiche/${props.fiche_id}`}>
        <div className={Style.LienFicheMasque}>{props.titre}</div>
      </Link>
    );
  } else {
    return (
      <Link to={`/fiche/${props.fiche_id}`}>
        <div className={Style.LienFiche}>{props.titre}</div>
      </Link>
    );
  }
}

export default Lienfiche;
