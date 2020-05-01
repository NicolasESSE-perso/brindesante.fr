import React, { useEffect, useState } from "react";
import { Editor, RichUtils, EditorState } from "draft-js";
import Style from "./MonEditeur.module.css";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";

function MonEditeur({ textHtml, onTextChange, placeholder }) {
  const state = stateFromHTML("<p><br></p>");
  const [initTexte, setInitTexte] = useState(false);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(state)
  );

  //NIE intilisation de l'éditeur
  useEffect(() => {
    //console.log({ textHtml: textHtml });
    if (!initTexte && textHtml !== "") {
      //    console.log("Initilisation");
      setInitTexte(true);
      const state = stateFromHTML(textHtml);
      setEditorState(EditorState.createWithContent(state));
    }
    //NIE c'est volontaire alors je ne veux pas afficher l'avertissement en dessous
    // eslint-disable-next-line
  }, [textHtml]);

  //NIE quand on change le texte dans mon éditeur
  const onEditorChange = (value) => {
    //NIE j'enregistre l'état
    setEditorState(value);
    setInitTexte(true);

    //NIE je retourne le texte.
    let contentState = value.getCurrentContent();
    let html = stateToHTML(contentState);
    onTextChange(html);
    setInitTexte(true);
  };

  //NIE Gestion des raccourci claviers
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onEditorChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  //NIE Action sur les boutons
  const onUnderlineClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };
  const onBoldClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };
  const onItalicClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };
  const onStrikeThroughClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, "STRIKETHROUGH"));
  };

  return (
    <div className={Style.MonEditeur}>
      <div className={Style.Editor}>
        <Editor
          editorState={editorState}
          onChange={onEditorChange}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
      <div className={Style.ToolBar}>
        <div
          style={{ textDecoration: "underline" }}
          className={Style.Bouton}
          onClick={onUnderlineClick}
        >
          U
        </div>
        <div onClick={onBoldClick}>
          <b>B</b>
        </div>
        <div className={Style.Bouton} onClick={onItalicClick}>
          <em>I</em>
        </div>
        <div className={Style.Bouton} onClick={onStrikeThroughClick}>
          <span style={{ textDecoration: "line-through" }}>abc</span>
        </div>
      </div>
    </div>
  );
}
export default MonEditeur;
