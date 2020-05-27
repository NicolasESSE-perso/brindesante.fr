import React, { useState, useContext } from "react";
import Style from "./Param.module.css";
import { ParamContext } from "../Context/ParamContext";
import TexteApropos from "../Components/TexteApropos/TexteApropos";
import TexteBrinDeSante from "../Components/TexteBrinDeSante/TexteBrinDeSante";
import BoutonEnregistrer from "../Components/Boutons/BoutonEnregistrer";

function Param() {
  const contexte = useContext(ParamContext);
  const param = contexte.param;

  //NIE initialisation des composants
  const [texteAccueil, setTexteAcceuil] = useState("");
  const [texteApropos, setTexteApropos] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [message, setMessage] = useState("");

  //NIE récupération des données
  const getParam = () => {
    setTexteAcceuil(param.texte_accueil);
    setTexteApropos(param.texte_apropos);
    setEmailContact(param.email_contact);
  };

  //NIE à la création du composant
  useState(() => {
    getParam();
  }, []);

  //NIE enregistrement des données
  const sauvegarderParam = async (event) => {
    //NIE on efface le message
    setMessage("");

    //NIE on appelle l'API en PATCH si j'un ID de fiche, en POST Sinon
    const monUrl = `${process.env.REACT_APP_URL_API_BRINDESANTE}/param/`;
    console.log(monUrl);
    const data = await fetch(monUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        texte_accueil: texteAccueil,
        texte_apropos: texteApropos,
        email_contact: emailContact,
      }),
    });

    //NIE je récupère le retour
    const resultat = await data.json();

    if (resultat._id) {
      setMessage("Enregistrement OK");
    }

    //NIE je force le contexte à se reload
    contexte.getParam();
    //contexte.getFiches();
  };

  return (
    <div className={Style.Param}>
      <h1>Paramétrage</h1>
      <div className={Style.BlocParam}>
        <div className={Style.TitreParam}>Texte accueil</div>
        <div className={Style.ComposantParam}>
          <TexteBrinDeSante
            value={texteAccueil}
            onChange={(value) => setTexteAcceuil(value)}
          />
        </div>
      </div>
      <div className={Style.BlocParam}>
        <div className={Style.TitreParam}>Texte A propos</div>
        <div className={Style.ComposantParam}>
          <TexteApropos
            value={texteApropos}
            onChange={(value) => setTexteApropos(value)}
          />
        </div>
      </div>
      <div className={Style.BlocParam}>
        <div className={Style.TitreParam}>Email de contact</div>
        <div className={Style.ComposantParam}>
          <input
            className={Style.input}
            value={emailContact}
            onChange={(e) => setEmailContact(e.target.value)}
          />
        </div>
      </div>
      <div className={Style.BoutonEnregistrer}>
        <BoutonEnregistrer onClick={sauvegarderParam} />
      </div>
      <div>{message}</div>
    </div>
  );
}
export default Param;
