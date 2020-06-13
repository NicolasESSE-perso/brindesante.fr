import React, { useContext, useState, useEffect } from "react";
import { ListeFichesContext } from "../Context/ListeFichesContext";
import FicheM from "../Components/FicheM/FicheM";
import Style from "./HomePage.module.css";
import LogoDelphine from "../Components/Menu/LogoDelphine";
import { Link } from "react-router-dom";
import TexteBrinDeSante from "../Components/TexteBrinDeSante/TexteBrinDeSante";

function Homepage() {
  const contexte = useContext(ListeFichesContext);
  const fiches = contexte.fiches;
  const [fichesAccueil, setFichesAccueil] = useState([]);
  const [masquerBouton, setMasquerBouton] = useState(false);
  const [nouvellesFiches, setNouvellesFiches] = useState([]);

  function AfficherBouton() {
    if (masquerBouton) {
      return "";
    } else {
      return (
        <button className={Style.Bouton} onClick={afficherTout}>
          Voir toutes les fiches
        </button>
      );
    }
  }

  const filtrerFiches = () => {
    //NIE copy des fiches
    let tempFiches = [...fiches];
    //NIE filtrer pout n'afficher que les fiches à afficher en page d'accueil
    const resFiches = tempFiches.filter((fiche) => {
      if (fiche.afficher_en_page_accueil) {
        return 1;
      } else {
        return 0;
      }
    });
    setFichesAccueil(resFiches);
  };

  const filtrerNouvellesFiches = () => {
    //NIE copy des fiches
    let tempFiches = [...fiches];
    //NIE filtrer pout n'afficher que les fiches à afficher dans nouvelles fiches
    const resFiches = tempFiches.filter((fiche) => {
      if (fiche.afficher_nouvelle_fiche) {
        return 1;
      } else {
        return 0;
      }
    });
    setNouvellesFiches(resFiches);
  };

  useEffect(() => {
    filtrerFiches();
    filtrerNouvellesFiches();
    // eslint-disable-next-line
  }, [fiches]);

  const afficherTout = () => {
    setMasquerBouton(true);
    setFichesAccueil(fiches);
  };

  return (
    <div>
      <div className={Style.LogoMobile}>
        <LogoDelphine />
      </div>
      <div className={Style.HomePage}>
        <div className={Style.Phrase}>
          <TexteBrinDeSante isReadOnly={true} />
        </div>
        {nouvellesFiches.length > 0 ? (
          <div className={Style.NouvellesFiches}>
            <p className={Style.SousTitre}>Nouvelles fiches</p>
            {nouvellesFiches.map((fiche) => (
              <div className={Style.Suggestions} key={fiche._id}>
                <FicheM
                  titre={fiche.titre}
                  fiche_id={fiche._id}
                  key={fiche._id}
                  description={fiche.description}
                  date_modif={fiche.date_modif}
                  image_url={fiche.image_url}
                />
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        <div className={Style.SymptomesFrequents}>
          <p className={Style.SousTitre}>Symptômes les plus fréquents</p>

          {fichesAccueil.map((fiche) => (
            <div className={Style.Suggestions} key={fiche._id}>
              <FicheM
                titre={fiche.titre}
                fiche_id={fiche._id}
                key={fiche._id}
                description={fiche.description}
                date_modif={fiche.date_modif}
                image_url={fiche.image_url}
              />
            </div>
          ))}
        </div>
        <div className={Style.DivBoutons}>
          {<AfficherBouton />}
          <Link to="/Apropos" className={Style.AproposMobile}>
            A propos de Brindesante.fr
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
