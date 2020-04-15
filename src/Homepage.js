import React, { useContext } from "react";
import { ListeFichesContext } from "./ListeFichesContext";
import FicheM from "./FicheM/FicheM";

function Homepage() {
  const [fiches] = useContext(ListeFichesContext);

  return (
    <div className="HomePage">
      <h1>
        "Des conseils sur les premiers soins à effectuer pour savoir quoi faire
        quand on ne sait plus quoi faire !"
      </h1>
      {fiches.map((fiche) => (
        <FicheM titre={fiche.titre} fiche_id={fiche._id} key={fiche._id} />
      ))}
    </div>
  );
}
export default Homepage;
