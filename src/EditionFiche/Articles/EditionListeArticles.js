import React, { useState, useEffect } from "react";
import EditionArticle from "./EditionArticle";
import Style from "./EditionListeArticles.module.css";

function EditionsListeArticles({ value, onChange }) {
  //NIE initialisation des constantes
  const [articles, setArticles] = useState([]);

  //NIE chargement des données
  useEffect(() => {
    if (value.length > 0 && articles.length === 0) {
      console.log({ chargement: value });
      setArticles(value);
    }
  }, [value, articles.length]);

  //NIE ajout d'un article dynamiquement
  const ajouterArticle = (e) => {
    e.preventDefault();
    const nouvelArticle = { titre: "Titre", texte: "" };
    setArticles([...articles, nouvelArticle]);
  };

  //NIE Action de Article
  const supprimerArticle = (index) => {
    console.log({ supprimerArticle: index });
    let copyArticle = [...articles];
    copyArticle.splice(index, 1);
    console.log(copyArticle);
    setArticles(copyArticle);
  };

  //NIE modification d'un article
  const onEditionArticleChange = (data, id) => {
    //console.log({ id: id, modifierArticle: data });
    let copyArticle = [...articles];
    copyArticle.splice(id, 1, data);
    setArticles(copyArticle);
    console.log(articles);
    //NIE je renvoie la liste des articles à jour
    onChange(articles);
  };

  return (
    <div>
      <div className={Style.FicheWrapper}>
        {articles.map((article, index) => (
          <EditionArticle
            article={article}
            id={index}
            onChange={onEditionArticleChange}
            onDelete={supprimerArticle}
            key={index}
          />
        ))}

        <div className={Style.BoutonAjouterFiche} onClick={ajouterArticle}>
          <h2 className={Style.LabelAction}>Ajouter</h2>
          <h4 className={Style.LabelAction}>un conseil</h4>
        </div>
      </div>
    </div>
  );
}
export default EditionsListeArticles;
