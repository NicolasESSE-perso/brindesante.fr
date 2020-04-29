import React from "react";
import Style from "./NombreDeResultat.module.css";

function NombreDeResultat({ nbResultats, unResultat, plusieursResultat }) {
  const libelleResultat =
    nbResultats <= 1 ? " fiche trouvée" : " fiches trouvées";
  const libelleNombre = nbResultats === 0 ? "Aucune" : nbResultats;

  return (
    <div className={Style.NombreDeResultat}>
      <p className={Style.Libelle}>
        {libelleNombre}
        {libelleResultat}
      </p>
    </div>
  );
}

export default NombreDeResultat;
