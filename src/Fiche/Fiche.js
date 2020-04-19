import React, { useState, useEffect, useContext } from "react";
import Style from "./Fiche.module.css";
import EditionFiche from "../EditionFiche/EditionFiche";
import Article from "./Article";
import { DelphineContext } from "../DelphineContext";
import BoutonModifier from "../Boutons/BoutonModifier";

function Fiche({ match }) {
  //NIE pour afficher le composant de modification
  const [isConnected] = useContext(DelphineContext);
  const [popupModification, setPopupModification] = useState();

  //NIE mes données
  const [symptomes, setSymptomes] = useState("");
  const [dateModif, setDateModif] = useState();
  const [maFiche, setFiche] = useState({});
  const [ficheId, setFicheId] = useState();
  const [ficheModified, setFicheModified] = useState(false);
  const [articles, setArticles] = useState([]);

  //NIE Mes fonctions
  //NIE pour utiliser dangerouslySetInnerHTML pour le richtext
  const ToHtml = (data) => {
    return { __html: data };
  };

  //NIE Actions dans la page

  const fermerPopup = () => {
    setPopupModification();
  };

  const reloadAffichage = () => {
    console.log("reloadAffichage");
    setFicheModified(true);
    fermerPopup();
  };

  const afficherPopup = () => {
    setPopupModification(
      <EditionFiche
        ficheId={ficheId}
        onClose={fermerPopup}
        onSave={reloadAffichage}
      />
    );
  };

  //NIE Import des données de la fiche chargé dans le contexte
  useEffect(() => {
    //NIE ma ficheID a renseigner quand mon composant récupères les props
    setFicheId(match.params.id);

    //NIE si je déclare en dehors du useEffect j'ai des erreurs
    const fetchData = async () => {
      //NIE je récupère les data depuis l'API
      const data = await fetch(
        `${process.env.REACT_APP_URL_API_BRINDESANTE}/fiches/${match.params.id}`
      );
      //NIE je convertis ce que je récupère en JSON pour obtenir un tableau de fiches :)
      const ficheJson = await data.json();

      //NIE c'est pratique pour développer
      console.log({
        composant: Fiche,
        url: `${process.env.REACT_APP_URL_API_BRINDESANTE}/fiches/${match.params.id}`,
        reponse: ficheJson,
      });

      //NIE j'enregistre les fiches dans la constante créée
      setFiche(ficheJson);
      //NIE Formattage de la date de modification
      const tmp_date_modif = new Date(ficheJson.date_modif);
      setDateModif(
        tmp_date_modif.toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      setSymptomes(ficheJson.symptomes);
      setArticles(ficheJson.articles);
    };
    //NIE j'utilise la fonction pour récupérer mes données
    fetchData();
    //NIE mes données viennent d'être chargée je remets modifiée à false
    setFicheModified(false);
  }, [match.params.id, ficheModified]);

  return (
    <div className={Style.Fiche}>
      {popupModification}
      <div className={Style.Titre}>
        <div className={Style.BarreAction}>
          <h1>{maFiche.titre_fiche}</h1>
          {isConnected ? (
            <BoutonModifier texte="Modifier" onClick={afficherPopup} />
          ) : (
            ""
          )}
        </div>
        <p className={Style.Description}>{maFiche.description}</p>
        <p className={Style.DateModification}>Mise à jour le : {dateModif}</p>
      </div>
      <div className={Style.Symptomes}>
        <div>
          <h2>Symptômes</h2>
        </div>
        <div
          className={Style.SymptomesData}
          dangerouslySetInnerHTML={ToHtml(symptomes)}
        ></div>
      </div>

      <div className={Style.FicheWrapper}>
        <div className={Style.Conseil}>
          <h2>Que faire?</h2>
          <p dangerouslySetInnerHTML={ToHtml(maFiche.conseils)}></p>
        </div>
        <div className={Style.AllezMedecin}>
          <h2>Je vais chez le médecin si :</h2>
          <p
            dangerouslySetInnerHTML={ToHtml(maFiche.aller_chez_le_medecin)}
          ></p>
        </div>

        {articles.map((article) => (
          <Article
            titre={article.titre}
            texte={article.texte}
            key={article._id}
          />
        ))}
      </div>
    </div>
  );
}
export default Fiche;
