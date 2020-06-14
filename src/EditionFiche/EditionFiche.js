import React, { useState, useEffect, useContext } from "react";
import Style from "./EditionFiche.module.css";
import IconeFermer from "../Images/icones/Fermer.svg";
import EditionBouton from "../Components/Boutons/EditionBouton";
import EditionListeArticle from "../Components/Articles/EditionListeArticles";
import MonEditeur from "../Components/MonEditeur/MonEditeur";
import EditionIllustrations from "../Images/EditionIllustrations";
//import CheckboxAccueil from "../Components/EditionFiche/CheckboxAccueil";
import { ListeFichesContext } from "../Context/ListeFichesContext";
import SelectGroupeFiche from "../Components/EditionFiche/SelectGroupeFiche";
import ActiverDesactiver from "../Components/EditionFiche/ActiverDesactiver";
import Urgences from "../Components/EditionFiche/Urgences";

function EditionFiche({ ficheId, onClose, onSave }) {
  //NIE Création de toutes mes constantes
  const contexte = useContext(ListeFichesContext);
  const [titreBouton, setTitreBouton] = useState("");
  const [titreFiche, setTitreFiche] = useState("");
  const [description, setDescription] = useState("");
  const [dateModif, setDateModif] = useState("");
  const [symptomes, setSymptomes] = useState("");
  const [conseils, setConseils] = useState("");
  const [allerMedecin, setAllerMedecin] = useState("");
  const [articles, setArticles] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [afficherEnPageAccueil, setAfficherEnPageAccueil] = useState(false);
  const [groupeFiche, setGroupeFiche] = useState();
  const [isMasque, setIsMasque] = useState(false);
  const [afficherNouvelleFiche, setAfficherNouvelleFiche] = useState(false);
  const [appeler15, setAppeler15] = useState("");
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
    setImageUrl(maFiche.image_url);
    setAfficherEnPageAccueil(maFiche.afficher_en_page_accueil);
    setGroupeFiche(maFiche.groupe);
    setIsMasque(maFiche.is_masque);
    setAfficherNouvelleFiche(maFiche.afficher_nouvelle_fiche);
    maFiche.appeler_le_15
      ? setAppeler15(maFiche.appeler_le_15)
      : setAppeler15("");
  };

  //NIE Action sur ma popup
  const FermerPopup = () => {
    onClose();
  };
  const actionSauvegarde = (event) => {
    event.preventDefault();
    sauvegarderFiche();
  };

  //NIE Gestion de mon formulaire
  const onTitreBoutonChange = (texte) => {
    setTitreBouton(texte);
  };

  const updateTitreFiche = (event) => {
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
        image_url: imageUrl,
        afficher_en_page_accueil: afficherEnPageAccueil,
        groupe: groupeFiche,
        is_masque: isMasque,
        afficher_nouvelle_fiche: afficherNouvelleFiche,
        appeler_le_15: appeler15,
      }),
    });
    //NIE je force le contexte à se reload
    await contexte.getFiches();
    //NIE je retourne le onSave() à la page appelante
    await onSave();
  };

  return (
    <div className={Style.Background}>
      <div className={Style.Feuille}>
        <div className={Style.Entete}>
          <img src={IconeFermer} alt="Fermer" onClick={FermerPopup} />
          {libelleEntete}
        </div>
        <form onSubmit={actionSauvegarde}>
          <div className={Style.BlocTitre}>
            <div className={Style.Photo}>
              <EditionIllustrations
                imageUrl={imageUrl}
                onChange={(newUrl) => setImageUrl(newUrl)}
              />
            </div>

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
              <div className={Style.GroupeFiche}>
                <SelectGroupeFiche
                  value={groupeFiche}
                  onChange={(value) => setGroupeFiche(value)}
                />
              </div>
              <div className={Style.MasquerFiche}></div>
              <div className="TitreBouton">
                <EditionBouton
                  texte={titreBouton}
                  onTexteChange={onTitreBoutonChange}
                  is_masque={isMasque}
                />
              </div>

              <div>
                <ActiverDesactiver
                  texte="Masquer la fiche"
                  checked={isMasque}
                  onChange={(value) => setIsMasque(value)}
                  name="MasquerFiche"
                />
                <ActiverDesactiver
                  texte="Nouvelle fiche"
                  checked={afficherNouvelleFiche}
                  onChange={(value) => setAfficherNouvelleFiche(value)}
                  name="NouvelleFiche"
                />
                <ActiverDesactiver
                  texte="Symptomes Frequents"
                  checked={afficherEnPageAccueil}
                  onChange={(value) => setAfficherEnPageAccueil(value)}
                  name="FicheFrequente"
                />
              </div>
            </div>
          </div>

          <div className={Style.symptomes}>
            <h2 className={Style.TitreBlocSymptome}>Symptômes</h2>
            <div className={Style.Editor}>
              <MonEditeur
                onTextChange={updateSymptomes}
                textHtml={symptomes}
                placeholder="Quels sont les symptômes ?"
                colorBarre="#C4E3E6"
              />
            </div>
          </div>

          <div className={Style.Wrapper}>
            <div className={Style.BlocConseils}>
              <h2 className={Style.TitreBloc}>Que faire?</h2>
              <div className={Style.Editor}>
                <MonEditeur
                  onTextChange={updateConseils}
                  textHtml={conseils}
                  placeholder="Quels sont tes conseils  ?"
                  colorBarre="#C4E3E6"
                />
              </div>
            </div>
            <div className={Style.BlocsAllezMedecin}>
              <h2 className={Style.TitreBloc}>Je vais chez le médecin si :</h2>
              <div className={Style.Editor}>
                <MonEditeur
                  onTextChange={updateAllerMedecin}
                  textHtml={allerMedecin}
                  placeholder="Quand doit-on aller chez le médecin ?"
                  colorBarre="#C4E3E6"
                />
                <Urgences
                  value={appeler15}
                  onChange={(value) => setAppeler15(value)}
                  readOnly={false}
                />
              </div>
            </div>
          </div>

          <div className={Style.BlocAutresConseils}>
            <EditionListeArticle value={articles} onChange={updateArticles} />
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
