import React from "react";
import { Link } from "react-router-dom";
import Style from "./LienFiche.module.css";

function Lienfiche(props) {
  return (
    <div className={Style.Link}>
      <Link to={`/fiche/${props.fiche_id}`}>
        <div className={Style.LienFiche}>
          <p>{props.titre}</p>
        </div>
      </Link>
    </div>
  );
}

export default Lienfiche;
