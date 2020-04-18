import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import EditionFiche from "./EditionFiche/EditionFiche";
import Style from "./Entete.module.css";
import IconeAjouter from "./icones/Ajouter.svg";

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
    <div className={Style.Entete}>
      {popUpAjoutFiche}
      <div className={Style.BoutonAjouter} onClick={afficherAjoutFiche}>
        <img src={IconeAjouter} alt="" />
        <p>Ajouter une fiche</p>
      </div>
      <div className={Style.NavLink}>
        <Link to="/recherche">Rechercher </Link>
      </div>
      <div className={Style.NavLink}>
        <Link to="/Apropos">A propos</Link>
      </div>
    </div>
  );
}

export default Entete;
