import React, { useState, useEffect } from "react";
import Style from "./EditionFiche.module.css";
import IconeFermer from "../icones/Fermer.svg";
import ImageExemple from "../icones/Exemple.png";
//import Editor from "./Editor";
import EditionBouton from "./EditionBouton";
import EditionListeArticle from "./Articles/EditionListeArticles";
import MonEditeur from "./MonEditeur/MonEditeur";

function EditionFiche({ ficheId, onClose, onSave }) {
  //NIE Création de toutes mes constantes
  const [titreBouton, setTitreBouton] = useState("");
  const [titreFiche, setTitreFiche] = useState("");
  const [description, setDescription] = useState("");
  const [dateModif, setDateModif] = useState("");
  const [symptomes, setSymptomes] = useState("");
  const [conseils, setConseils] = useState("");
  const [allerMedecin, setAllerMedecin] = useState("");
  const [articles, setArticles] = useState([]);

  const libelleEntete = ficheId
    ? "Modification d'une fiche"
    : "Création d'une fiche";
  const libelleBouton = ficheId ? "Modifier la fiche" : "Enregistrer";
  const libelleDateModification = ficheId ? "Dernière modification le : " : "";

  //NIE récupération des données de la fiche à l'ouverture du composant d'où les []
  useEffect(() => {
    //NIE si j'ai un ficheId cela indique une modification de la fiche dans ce cas je récupère les données de la fiche
    if (ficheId) {
      //NIE fonction aynchrone pour récupérer les données de la fiche
      const fetchData = async () => {
        const data = await fetch(
          `${process.env.REACT_APP_URL_API_BRINDESANTE}/fiches/${ficheId}`
        );
        const ficheJson = await data.json();
        initiliseFormulaire(ficheJson);
        //NIE c'est pratique pour développer
        console.log({
          composant: EditionFiche,
          url: `${process.env.REACT_APP_URL_API_BRINDESANTE}/fiches/${ficheId}`,
          reponse: ficheJson,
        });
      };
      //NIE je lance ma fonction de récupération de l'API
      fetchData();
    }
  }, [ficheId]);

  //NIE Initialisation des données du formulaire
  const initiliseFormulaire = (maFiche) => {
    setTitreBouton(maFiche.titre);
    setTitreFiche(maFiche.titre_fiche);
    setDescription(maFiche.description);
    if (maFiche.date_modif) {
      const tmp_date_modif = new Date(maFiche.date_modif);
      setDateModif(
        tmp_date_modif.toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }
    setSymptomes(maFiche.symptomes);
    setConseils(maFiche.conseils);
    setAllerMedecin(maFiche.aller_chez_le_medecin);
    setArticles(maFiche.articles);
  };

  //NIE Action sur ma popup
  const FermerPopup = () => {
    onClose();
  };
  const actionSauvegarde = (event) => {
    event.preventDefault();
    sauvegarderFiche();
    onSave();
  };

  //NIE Gestion de mon formulaire
  const onTitreBoutonChange = (texte) => {
    setTitreBouton(texte);
  };

  const updateTitreFiche = (event) => {
    console.log({ titreBouton: titreBouton, titreFiche: titreFiche });
    setTitreFiche(event.target.value);
    if (titreBouton === titreFiche || titreBouton === "") {
      //NIE dans ce cas cela veut dire que l'on n'a pas modifié le titre sur le bouton. Je copie le titre dans le bouton
      setTitreBouton(event.target.value);
    }
  };

  const updateSymptomes = (html) => {
    setSymptomes(html);
  };
  const updateConseils = (html) => {
    setConseils(html);
  };
  const updateAllerMedecin = (html) => {
    setAllerMedecin(html);
  };

  const updateArticles = (articles) => {
    console.log(articles);
    setArticles(articles);
  };

  //NIE Enregistrer la fiche
  const sauvegarderFiche = async (event) => {
    //NIE on appelle l'API en PATCH si j'un ID de fiche, en POST Sinon
    const monUrl = ficheId
      ? `${process.env.REACT_APP_URL_API_BRINDESANTE}/fiches/${ficheId}`
      : `${process.env.REACT_APP_URL_API_BRINDESANTE}/fiches/`;

    console.log(monUrl);
    await fetch(monUrl, {
      method: ficheId ? "PATCH" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titre: titreBouton,
        titre_fiche: titreFiche,
        description: description,
        symptomes: symptomes,
        conseils: conseils,
        aller_chez_le_medecin: allerMedecin,
        articles: articles,
      }),
    });
  };

  return (
    <div className={Style.Background}>
      {ficheId}
      <div className={Style.Feuille}>
        <div className={Style.Entete}>
          <img src={IconeFermer} alt="Fermer" onClick={FermerPopup} />
          {libelleEntete}
        </div>
        <form onSubmit={actionSauvegarde}>
          <div className={Style.BlocTitre}>
            <img className={Style.Photo} src={ImageExemple} alt=" " />
            <div className={Style.BlocTitreData}>
              <input
                className={Style.ChampTitre}
                type="text"
                name="titre"
                placeholder="Titre de la fiche (ex : que faire en cas de fièvre?)"
                value={titreFiche}
                onChange={updateTitreFiche}
              />
              <textarea
                className={Style.ChampDescription}
                name="description"
                placeholder="Saisir la description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className={Style.DateModification}>
                {libelleDateModification}
                {dateModif}
              </p>
              <div className="TitreBouton">
                <EditionBouton
                  texte={titreBouton}
                  onTexteChange={onTitreBoutonChange}
                />
              </div>
            </div>
          </div>

          <div className={Style.symptomes}>
            <h2 className={Style.TitreBloc}>Symptômes</h2>
            <div className={Style.Editor}>
              <MonEditeur
                onTextChange={updateSymptomes}
                textHtml={symptomes}
                placeholder="Quels sont les symptômes ?"
                colorBarre="#C4E3E6"
              />
            </div>
          </div>

          <div className={Style.conseils}>
            <h2 className={Style.TitreBloc}>Conseils</h2>
            <div className={Style.Editor}>
              <MonEditeur
                onTextChange={updateConseils}
                textHtml={conseils}
                placeholder="Quels sont tes conseils  ?"
                colorBarre="#C4E3E6"
              />
            </div>
          </div>

          <div className={Style.allerMedecin}>
            <h2 className={Style.TitreBloc}>Aller chez le médecin ?</h2>
            <div className={Style.Editor}>
              <MonEditeur
                onTextChange={updateAllerMedecin}
                textHtml={allerMedecin}
                placeholder="Quand doit-on aller chez le médecin ?"
                colorBarre="#C4E3E6"
              />
            </div>
          </div>

          <div className={Style.autresConseils}>
            <h2 className={Style.TitreBloc}>Autres Conseils</h2>
            <div className={Style.WrapperFiche}>
              <EditionListeArticle value={articles} onChange={updateArticles} />
            </div>
          </div>
          <div className={Style.BlocEnregistrer}>
            <button className={Style.BoutonEnregistrer} type="submit">
              {libelleBouton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditionFiche;