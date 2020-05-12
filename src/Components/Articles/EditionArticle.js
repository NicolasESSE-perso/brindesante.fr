import React, { useState } from "react";
import Style from "./EditionArticle.module.css";
import IconeSupprimer from "../../Images/icones/Supprimer.svg";
import IconeUp from "../../Images/icones/Up.svg";
import IconeDown from "../../Images/icones/Down.svg";

import MonEditeur from "../MonEditeur/MonEditeur";

function EdtionArticle({
  article,
  id,
  onDelete,
  onChange,
  onMoveUp,
  onMoveDown,
}) {
  const [afficherToolBar, SetAfficherToolBar] = useState(false);

  //const [monArticle, setMonArticle] = useState({});
  //const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const supprimerArticle = (e) => {
    onDelete(e.target.id);
  };

  const moveUp = (e) => {
    onMoveUp(e.target.id);
  };

  const moveDown = (e) => {
    onMoveDown(e.target.id);
  };

  const updateTitre = (e) => {
    const monArticle = {
      titre: e.target.value,
      texte: article.texte,
    };
    onChange(monArticle, id);
  };

  const updateValue = (value) => {
    const monArticle = {
      titre: article.titre,
      texte: value,
    };
    onChange(monArticle, id);
  };

  return (
    <div
      className={Style.EditionArticle}
      onMouseEnter={() => SetAfficherToolBar(true)}
      onMouseLeave={() => SetAfficherToolBar(false)}
    >
      <div className={Style.TitreBloc}>
        <textarea
          className={Style.InputTitre}
          type="text"
          name="titre"
          value={article.titre}
          onChange={updateTitre}
        />
        {afficherToolBar && (
          <div className={Style.ToolBar}>
            <img
              className={Style.IconeAction}
              src={IconeUp}
              id={id}
              alt=" "
              onClick={moveUp}
            />

            <img
              className={Style.IconeAction}
              src={IconeDown}
              id={id}
              alt=" "
              onClick={moveDown}
            />

            <img
              className={Style.IconeAction}
              src={IconeSupprimer}
              id={id}
              alt=" "
              onClick={supprimerArticle}
            />
          </div>
        )}
      </div>
      <MonEditeur
        textHtml={article.texte}
        onTextChange={updateValue}
        key={article.titre}
      />
    </div>
  );
}

export default EdtionArticle;
