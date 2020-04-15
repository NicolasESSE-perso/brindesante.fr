import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import EditionFiche from "./EditionFiche/EditionFiche";

function Entete() {
  //NIE pour afficher le composant d'ajout de fiche
  const [popUpAjoutFiche, setPopUpAjoutFiche] = useState();

  const fermerAjoutFiche = () => {
    setPopUpAjoutFiche();
  };

  const afficherAjoutFiche = () => {
    setPopUpAjoutFiche(
      <EditionFiche
        ficheId=""
        onClose={fermerAjoutFiche}
        onSave={fermerAjoutFiche}
      />
    );
  };

  return (
    <div className="Entete">
      {popUpAjoutFiche}
      <div className="boutonAjouter" onClick={afficherAjoutFiche}>
        Ajouter une fiche
      </div>
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
