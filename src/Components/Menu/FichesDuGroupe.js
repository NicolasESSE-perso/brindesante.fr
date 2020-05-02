import React, { useContext, useEffect, useState } from "react";
import Style from "./FichesDuGroupe.module.css";
import { ListeFichesContext } from "../../Context/ListeFichesContext";
import Lienfiche from "./Lienfiche";

function FichesDuGroupe({ groupe }) {
  const contexte = useContext(ListeFichesContext);
  const fiches = contexte.fiches;
  const [FichesDansLeGroupe, setFichesDansLeGroupe] = useState([]);

  useEffect(() => {
    // console.log({ groupe: groupe });
    const arrayTemp = [];
    fiches.forEach((fiche) => {
      //NIE pour gérer la ≠ entre "" et undefined
      const varGroupe = groupe ? groupe : "";
      const varGroupeFiche = fiche.groupe ? fiche.groupe : "";

      // console.log(fiche.groupe);
      /*
     console.log({
        groupe: groupe,
        fiche: fiche.titre,
        fichegroupe: fiche.groupe,
        test: fiche.groupe === groupe ? true : false,
      });
      */
      if (varGroupeFiche === varGroupe) {
        //console.log("Ajouter la fiche dans le groupe :" + fiche.titre);
        arrayTemp.push(fiche);
      }
    });
    setFichesDansLeGroupe(arrayTemp);
    // eslint-disable-next-line
  }, [fiches, groupe]);

  return (
    <div className={Style.FichesDuGroupe}>
      {FichesDansLeGroupe.map((fiche) => (
        <div key={fiche._id}>
          <Lienfiche titre={fiche.titre} fiche_id={fiche._id} key={fiche._id} />
        </div>
      ))}
    </div>
  );
}

export default FichesDuGroupe;
