import React, { useContext } from "react";
import { ListeFichesContext } from "./ListeFichesContext";
import FicheM from "./FicheM/FicheM";
import Style from "./HomePage.module.css";

function Homepage() {
  const [fiches] = useContext(ListeFichesContext);

  return (
    <div className={Style.HomePage}>
      <h1 className={Style.Phrase}>
        "Des conseils sur les premiers soins à effectuer pour savoir quoi faire
        quand on ne sait plus quoi faire !"
      </h1>

      <div className={Style.DivSousTitre}>
        <p className={Style.SousTitre}>Symptomes les plus fréquents</p>
      </div>
      {fiches.map((fiche) => (
        <div className={Style.Suggestions}>
          <FicheM
            titre={fiche.titre}
            fiche_id={fiche._id}
            key={fiche._id}
            description={fiche.description}
            date_modif={fiche.date_modif}
          />
        </div>
      ))}
    </div>
  );
}
export default Homepage;
