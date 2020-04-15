import React from "react";
import Style from "./Article.module.css";

function Article({ titre, texte }) {
  //NIE focntion pour afficher du HTML
  const ToHtml = (data) => {
    return { __html: data };
  };

  return (
    <div className={Style.article}>
      <h3 className={Style.titre}>{titre}</h3>
      <p className={Style.texte} dangerouslySetInnerHTML={ToHtml(texte)}></p>
    </div>
  );
}

export default Article;
