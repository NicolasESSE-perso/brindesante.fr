import React, { useContext } from "react";
import Style from "./GroupeFiches.module.css";
import { ListeFichesContext } from ".././ListeFichesContext";
import Lienfiche from "./Lienfiche";

function GroupeFiches() {
  const [fiches] = useContext(ListeFichesContext);

  return (
    <div className={Style.GroupeFiches}>
      <div className={Style.TitreGroupe}>SYMPTOMES</div>
      <div>
        {fiches.map((fiche) => (
          <Lienfiche titre={fiche.titre} fiche_id={fiche._id} key={fiche._id} />
        ))}
      </div>
    </div>
  );
}

export default GroupeFiches;
