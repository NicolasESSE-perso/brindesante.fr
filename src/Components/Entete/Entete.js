import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import EditionFiche from "../../EditionFiche/EditionFiche";
import Style from "./Entete.module.css";
import { DelphineContext } from "../../Context/DelphineContext";
import BoutonAjouter from "../../Components/Boutons/BoutonAjouter";
import IconeLoupe from "../../Images/icones/Loupe.svg";
import BoutonParam from "../Boutons/BoutonParam";

function Entete() {
  //NIE est ce que Delphine est connecté?
  const [isConnected] = useContext(DelphineContext);

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
      <BoutonAjouter
        texte="Ajouter une fiche"
        onClick={afficherAjoutFiche}
        isVisible={isConnected}
      />
      {Boolean(isConnected) && (
        <div className={Style.NavLink}>
          <Link to="/corrections">Corrections</Link>
        </div>
      )}
      <div className={Style.NavLink}>
        <img className={Style.IconeLoupe} src={IconeLoupe} alt="loupe" />
        <Link to="/recherche">Rechercher</Link>
      </div>
      <div className={Style.NavLink}>
        <Link to="/Apropos">A propos</Link>
      </div>
      <div>
        <BoutonParam isVisible={isConnected} />
      </div>
    </div>
  );
}

export default Entete;
