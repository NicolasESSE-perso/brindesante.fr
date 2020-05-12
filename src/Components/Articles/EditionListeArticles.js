import React, { useState, useEffect } from "react";
import EditionArticle from "./EditionArticle";
import Style from "./EditionListeArticles.module.css";
import "array.prototype.move";

function EditionsListeArticles({ value, onChange }) {
  //NIE initialisation des constantes
  const [articles, setArticles] = useState([]);

  //NIE chargement des données
  useEffect(() => {
    if (value.length > 0 && articles.length === 0) {
      setArticles(value);
    }
  }, [value, articles.length]);

  //NIE retour des articles
  useEffect(() => {
    if (articles) {
      onChange(articles);
    }
    // eslint-disable-next-line
  }, [articles]);

  //NIE ajout d'un article dynamiquement
  const ajouterArticle = (e) => {
    e.preventDefault();
    const nouvelArticle = { titre: "Titre", texte: "" };
    setArticles([...articles, nouvelArticle]);
  };

  //NIE Action de Article
  const supprimerArticle = (index) => {
    let copyArticle = [...articles];
    copyArticle.splice(index, 1);
    setArticles(copyArticle);
    //onChange(articles);
  };

  //NIE Up d'un article
  const upArticle = (index) => {
    let tempArray = [...articles];
    //myArray.move(moveFromPosition, moveToPosition)
    tempArray.move(index, index - 1);
    setArticles(tempArray);
    //onChange(articles);
  };

  //NIE down d'un article
  const downArticle = (index) => {
    let tempArray = [...articles];
    let monIndex = parseInt(index, 10);
    let newIndex = 0;
    let tailleTableau = tempArray.length - 1;

    console.log({ tailleTableau: tailleTableau, monIndex: monIndex });

    //NIE je teste pour que l'index ne soit pas en dehors du tableau
    if (monIndex === tailleTableau) {
      newIndex = 0;
    } else {
      newIndex = monIndex + 1;
    }

    //myArray.move(moveFromPosition, moveToPosition)
    tempArray.move(monIndex, newIndex);
    setArticles(tempArray);
    //onChange(articles);
  };

  //NIE modification d'un article
  const onEditionArticleChange = (data, id) => {
    //console.log({ id: id, modifierArticle: data });
    let copyArticle = [...articles];
    copyArticle.splice(id, 1, data);
    setArticles(copyArticle);
    //NIE je renvoie la liste des articles à jour
    onChange(articles);
  };

  return (
    <div>
      <div className={Style.FicheWrapper}>
        {articles.map((article, index) => (
          <div className={Style.EditionArticle} key={index}>
            <EditionArticle
              article={article}
              id={index}
              onChange={onEditionArticleChange}
              onDelete={supprimerArticle}
              key={index}
              onMoveUp={upArticle}
              onMoveDown={downArticle}
            />
          </div>
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
