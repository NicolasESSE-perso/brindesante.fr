import React from "react";
import { Link } from "react-router-dom";

function Lienfiche(props) {
  return (
    <div className="LienFiche">
      <h1>
        <Link to={`/fiche/${props.fiche_id}`}>{props.titre}</Link>
      </h1>
    </div>
  );
}

export default Lienfiche;
