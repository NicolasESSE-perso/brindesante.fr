import React from "react";
import { Link } from "react-router-dom";

function Lienfiche(props) {
  return (
    <Link to={`/fiche/${props.fiche_id}`}>
      <div className="LienFiche">
        <h1>{props.titre}</h1>
      </div>
    </Link>
  );
}

export default Lienfiche;
