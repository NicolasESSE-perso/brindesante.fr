import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EditionCorrection from "../Components/Correction/EditionCorrection";
import AffichageCorrection from "../Components/Correction/AffichageCorrection";
import BoutonAjouter from "../Components/Boutons/BoutonAjouter";
import Style from "./Corrections.module.css";

const monUrlAPI = `${process.env.REACT_APP_URL_API_BRINDESANTE}/corrections`;
//NIE je n'affiche le bouton ajouter que pour moi pour l'instant
const isDEV = process.env.REACT_APP_CONTEXTE === "dev" ? true : false;

function Corrections() {
  //NIE mes constantes
  const [corrections, setCorrections] = useState([]);
  const [afficherPanneau, setAfficherPanneau] = useState(false);
  const [editionCorrection, setEditionCorrection] = useState({});

  //NIE récupération des corrections
  const getCorrections = async () => {
    //NIE je récupère les data depuis l'API
    const data = await fetch(monUrlAPI);
    //NIE je convertis ce que je récupère en JSON pour obtenir un tabelau de fiches :)
    const dataJson = await data.json();
    //NIE c'est pratique pour développer
    console.log({
      composant: "GetCorrections",
      url: monUrlAPI,
      reponse: dataJson,
    });
    //NIE j'enregistre les corrections dans la constante créée
    setCorrections(dataJson);
  };

  //NIE update ou sauvegarde d'une correction
  const saveCorrection = () => {
    getCorrections();
    setAfficherPanneau(false);
  };

  //NIE ajouter un bug
  const ajouterBug = () => {
    setEditionCorrection({});
    setAfficherPanneau(true);
  };

  //NIE chargement des correction au mount du composant
  useEffect(() => {
    getCorrections();
  }, []);

  const afficherEdition = (correction) => {
    //NIE je n'affiche le panneau de modification que pour moi pour l'instant
    if (isDEV) {
      setEditionCorrection(correction);
      setAfficherPanneau(true);
    }
  };

  return (
    <div>
      <div className={Style.BlocTitre}>
        <div className={Style.Titre}>Corrections</div>
        {isDEV && (
          <BoutonAjouter
            isVisible="true"
            onClick={ajouterBug}
            color="#C4E3E6"
          />
        )}
      </div>

      <div className={Style.wrapper}>
        <div className={Style.ListeCorrections}>
          {corrections.map((correction) => (
            <AffichageCorrection
              correction={correction}
              key={correction._id}
              onClick={() => afficherEdition(correction)}
            />
          ))}
        </div>

        {Boolean(afficherPanneau) && (
          <div className={Style.EditionCorrection}>
            <EditionCorrection
              onClose={() => setAfficherPanneau(false)}
              onSave={saveCorrection}
              correction={editionCorrection}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Corrections;
