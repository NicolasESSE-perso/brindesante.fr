import React from "react";
import { Link } from "react-router-dom";
import Style from "./FicheM.module.css";
import Illustrations from "../../Images/Illustrations";

function FicheM({ titre, description, date_modif, fiche_id, image_url }) {
  //commentaire

  return (
    <div className={Style.FicheM}>
      <Link to={`/fiche/${fiche_id}`}>
        <div className={Style.Wrapper}>
          <div className={Style.Illustration}>
            <Illustrations monUrl={image_url} />
          </div>
          <div className={Style.detailFiche}>
            <p className={Style.Titre}>{titre}</p>
            <p className={Style.Texte}>{description}</p>
            <p className={Style.LireFiche}>Lire la suite</p>
            <p>{date_modif}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FicheM;
