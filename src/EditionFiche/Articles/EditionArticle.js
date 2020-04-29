import React from "react";
import Style from "./EditionArticle.module.css";
import IconeSupprimer from "../../Images/icones/Supprimer.svg";
import MonEditeur from "../MonEditeur/MonEditeur";
//import { EditorState } from "draft-js";

function EdtionArticle({ article, id, onDelete, onChange }) {
  //const [monArticle, setMonArticle] = useState({});
  //const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const supprimerArticle = (e) => {
    console.log({ supprimerArticle: e.target.id });
    onDelete(e.target.id);
  };

  const updateTitre = (e) => {
    const monArticle = {
      titre: e.target.value,
      value: article.value,
    };
    onChange(monArticle, id);
  };

  const updateTexte = (e) => {
    const monArticle = {
      titre: article.titre,
      texte: e.target.value,
      value: article.value,
    };
    onChange(monArticle, id);
  };

  const updateValue = (value) => {
    const monArticle = {
      titre: article.titre,
      texte: value,
      //value: value,
    };
    onChange(monArticle, id);
  };

  return (
    <div className={Style.EditionArticle}>
      <div className={Style.TitreBloc}>
        <textarea
          className={Style.InputTitre}
          type="text"
          name="titre"
          value={article.titre}
          onChange={updateTitre}
        />
        <img
          className={Style.IconeSupprimer}
          src={IconeSupprimer}
          id={id}
          alt=" "
          onClick={supprimerArticle}
        />
      </div>
      <textarea
        className={Style.InputTexte}
        type="text"
        name="texte"
        value={article.texte}
        onChange={updateTexte}
      />

      <MonEditeur
        textHtml={article.texte}
        onTextChange={updateValue}
        key={article.titre}
      />
    </div>
  );
}

export default EdtionArticle;
