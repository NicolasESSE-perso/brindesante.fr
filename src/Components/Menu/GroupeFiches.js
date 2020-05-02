import React, { useContext } from "react";
import Style from "./GroupeFiches.module.css";
import { ListeFichesContext } from "../../Context/ListeFichesContext";
import Lienfiche from "./Lienfiche";
import FichesDuGroupe from "./FichesDuGroupe";

function GroupeFiches() {
  const contexte = useContext(ListeFichesContext);

  const fiches = contexte.fiches;
  const groupes = contexte.groupes;

  return (
    <div className={Style.GroupeFiches}>
      <FichesDuGroupe groupe={undefined} />
      {groupes.map((groupe) => (
        <div key={groupe}>
          <div className={Style.TitreGroupe}>{groupe}</div>
          <div>
            <FichesDuGroupe groupe={groupe} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroupeFiches;
