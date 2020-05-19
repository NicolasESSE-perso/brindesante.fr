import React, { useState, useEffect } from "react";
import Style from "./AffichageCorrection.module.css";
import AffichageEtatCorrection from "./AffichageEtatCorrection";

export default function AffichageCorrection({ correction, onClick }) {
  const [dateCreation, setDateCreation] = useState("");
  const [dateResolution, setDateResolution] = useState("");

  useEffect(() => {
    if (correction.date_creation) {
      const tmp_date_modif = new Date(correction.date_creation);
      setDateCreation(
        tmp_date_modif.toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }

    if (correction.date_resolution) {
      const tmp_date_modif = new Date(correction.date_resolution);
      setDateResolution(
        tmp_date_modif.toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }
  }, [correction]);

  return (
    <div className={Style.AffichageCorrection} onClick={onClick}>
      <div className={Style.BlocInfo}>
        <div className={Style.Titre}>{correction.titre}</div>
        <div className={Style.Description}>{correction.description}</div>
        <div className={Style.DateCreation}>{dateCreation}</div>
      </div>
      <div className={Style.AffichageEtatCorrection}>
        <AffichageEtatCorrection
          etat={correction.etat}
          dateResolution={dateResolution}
        />
      </div>
    </div>
  );
}
