import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Entete() {
  return (
    <div className="Entete">
      <div className="Nav-link">
        <Link to="/recherche">Rechercher </Link>
      </div>
      <div className="Nav-link">
        <Link to="/Apropos">A propos</Link>
      </div>
    </div>
  );
}

export default Entete;
