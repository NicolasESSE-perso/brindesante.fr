import React, { useContext } from "react";
import Style from "./GroupeFiches.module.css";
import { ListeFichesContext } from "../../Context/ListeFichesContext";
import Lienfiche from "./Lienfiche";

function GroupeFiches() {
  const contexte = useContext(ListeFichesContext);

  const fiches = contexte.fiches;

  return (
    <div className={Style.GroupeFiches}>
      <div className={Style.TitreGroupe}>SYMPTOMES</div>
      {fiches.map((fiche) => (
        <Lienfiche titre={fiche.titre} fiche_id={fiche._id} key={fiche._id} />
      ))}
    </div>
  );
}

export default GroupeFiches;
