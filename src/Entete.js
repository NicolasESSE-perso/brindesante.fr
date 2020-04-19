import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import EditionFiche from "./EditionFiche/EditionFiche";
import Style from "./Entete.module.css";
import { DelphineContext } from "./DelphineContext";
import BoutonAjouter from "./Boutons/BoutonAjouter";

function Entete() {
  //NIE est ce que Delphine est connecté?
  const [isConnected] = useContext(DelphineContext);
  const [afficherBoutonAjouter, setAfficherBoutonAjouter] = useState(false);

  //Enregistrement du fait que
  useEffect(() => {
    if (isConnected) {
      setAfficherBoutonAjouter(true);
    }
  }, [isConnected]);

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
      {afficherBoutonAjouter ? (
        <BoutonAjouter texte="Ajouter une fiche" onClick={afficherAjoutFiche} />
      ) : (
        ""
      )}
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
