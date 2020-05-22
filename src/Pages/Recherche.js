import React, { useState, useContext } from "react";
import Style from "./Recherche.module.css";
import { ListeFichesContext } from "../Context/ListeFichesContext";
import NombreDeResultat from "../Components/Recherche/NombreDeResultat";
import FicheM from "../Components/FicheM/FicheM";

function Recherche() {
  const [texteRecherche, setTexteRecherche] = useState("");
  const contexte = useContext(ListeFichesContext);
  const fiches = contexte.fiches;
  const [resultats, setResultats] = useState([]);

  //NIE au debut on affiche tout
  useState(() => {
    setResultats([...fiches]);
  }, []);

  //NIE fonction de suppression des accents
  const enleveAccents = (texte) => {
    let texteSansAccent = texte.replace(/[èéêë]/gi, "e");
    texteSansAccent = texteSansAccent.replace(/[àâä]/gi, "a");
    return texteSansAccent;
  };

  //NIE j'enlève les mots en un une ...

  const enlevemots = (texte) => {
    let texteSansMot = texte.replace(/ au /gi, " ");
    texteSansMot = texteSansMot.replace(/ aux/gi, " ");
    texteSansMot = texteSansMot.replace(/ à/gi, " ");
    texteSansMot = texteSansMot.replace(/ la/gi, " ");
    texteSansMot = texteSansMot.replace(/ le/gi, " ");
    texteSansMot = texteSansMot.replace(/ les/gi, " ");
    texteSansMot = texteSansMot.replace(/ de/gi, " ");
    texteSansMot = texteSansMot.replace(/ du/gi, " ");
    texteSansMot = texteSansMot.replace(/ des/gi, " ");
    texteSansMot = texteSansMot.replace(/ ma/gi, " ");
    texteSansMot = texteSansMot.replace(/ sur/gi, " ");
    texteSansMot = texteSansMot.replace(/ sous/gi, " ");
    texteSansMot = texteSansMot.replace(/ dans/gi, " ");
    //NIE j'enlève les pluriels
    texteSansMot = texteSansMot.replace(/s$/gi, " ");
    texteSansMot = texteSansMot.replace(/s /gi, " ");

    return texteSansMot;
  };

  //NIE recherche des fiches
  const rechercheFiches = (texteDeRecherche) => {
    //NIE je fais une copie du tableau des fiches
    const tempArray = [...fiches];
    //NIE regex de recherche
    var regexRecherche = texteDeRecherche;

    if (regexRecherche) {
      //NIE j'enlève les accents
      regexRecherche = enleveAccents(regexRecherche);

      //NIE j'enlève les un une le la ...
      regexRecherche = enlevemots(regexRecherche);
      //console.log({ enlevemots: regexRecherche });

      regexRecherche = regexRecherche.trim();
      regexRecherche = regexRecherche.replace(/ /gi, ".*");
      regexRecherche = new RegExp(regexRecherche, "i");
      // console.log({ regexRecherche: regexRecherche });
    }

    const resArray = tempArray.filter((fiche) => {
      //NIE gestion des accents
      const titre = enleveAccents(fiche.titre);
      const description = enleveAccents(fiche.description);
      const titreFiche = enleveAccents(fiche.titre_fiche);
      const symptome = enleveAccents(fiche.symptomes);
      const conseils = enleveAccents(fiche.conseils);
      const aller_chez_le_medecin = enleveAccents(fiche.aller_chez_le_medecin);

      if (
        titre.toUpperCase().match(regexRecherche) ||
        description.toLowerCase().match(regexRecherche) ||
        titreFiche.toLowerCase().match(regexRecherche) ||
        symptome.toLowerCase().match(regexRecherche) ||
        conseils.toLowerCase().match(regexRecherche) ||
        aller_chez_le_medecin.toLowerCase().match(regexRecherche)
      ) {
        return 1;
      } else {
        return 0;
      }
    });
    setResultats(resArray);
  };

  const submitFormulaire = (event) => {
    //NIE
    event.preventDefault();
  };

  const updateTexteRecherche = (event) => {
    setTexteRecherche(event.target.value);

    rechercheFiches(event.target.value);
  };

  return (
    <div className={Style.PageRecherche}>
      <h1>Recherche</h1>
      <form onSubmit={submitFormulaire} className={Style.formulaire}>
        <inputnode
          className={Style.ChampRecherche}
          name="ChampRecherche"
          id="ChampRecherche"
          type="text"
          placeholder="ex: Fièvre, boutons ..."
          value={texteRecherche}
          onChange={updateTexteRecherche}
        />
      </form>
      <div className={Style.NbResultats}>
        <NombreDeResultat
          nbResultats={resultats.length}
          unResultat="fiche trouvée"
          plusieursResultat="fiches trouvées"
        />
      </div>
      <div className={Style.Liste}>
        {resultats.map((fiche) => (
          <div className={Style.Resultat} key={fiche._id}>
            <FicheM
              titre={fiche.titre}
              fiche_id={fiche._id}
              key={fiche._id}
              description={fiche.description}
              date_modif={fiche.date_modif}
              texteRecherche={texteRecherche}
              image_url={fiche.image_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Recherche;
