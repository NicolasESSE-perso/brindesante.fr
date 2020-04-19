import React, { useEffect, useState } from "react";
import {
  Editor,
  RichUtils,
  EditorState,
  convertFromHTML,
  ContentState,
} from "draft-js";
import Style from "./MonEditeur.module.css";
import { stateToHTML } from "draft-js-export-html";

function MonEditeur({ textHtml, onTextChange, placeholder }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  //NIE
  useEffect(() => {
    //console.log({ textHtml: textHtml });
    //console.log({ editorState: editorState.getCurrentContent() });
    if (textHtml && !editorState.getCurrentContent().hasText()) {
      //console.log({ initilisationdutexte: textHtml });
      //setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(value)));
      const blocksFromHTML = convertFromHTML(textHtml);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(state));
    } else {
      //console.log(false);
    }
    // eslint-disable-next-line
  }, [textHtml]);

  //NIE quand on change le texte dans mon éditeur
  const onEditorChange = (value) => {
    //console.log({ editorState: editorState.getCurrentContent().hasText() });

    setEditorState(value);

    //NIE je retourne le texte.
    let contentState = editorState.getCurrentContent();
    let html = stateToHTML(contentState);
    //console.log({ html: html });
    onTextChange(html);
    //    if (value) {
    //    const contentState = editorState.getCurrentContent();
    //  onChange(JSON.stringify(convertToRaw(contentState)));
    // }
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
  const onHighlight = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
  };

  return (
    <div className={Style.MonEditeur}>
      <div className={Style.Editor}>
        <Editor
          editorState={editorState}
          onChange={onEditorChange}
          handleKeyCommand={handleKeyCommand}
          placeholder={placeholder}
        />
      </div>
      <div className={Style.ToolBar}>
        <div className={Style.Bouton} onClick={onUnderlineClick}>
          U
        </div>
        <div className={Style.Bouton} onClick={onBoldClick}>
          <b>B</b>
        </div>
        <div className={Style.Bouton} onClick={onItalicClick}>
          <em>I</em>
        </div>
        <div className={Style.Bouton} onClick={onStrikeThroughClick}>
          abc
        </div>
        <div className={Style.Bouton} onClick={onHighlight}>
          <span style={{ background: "yellow", color: "black" }}>H</span>
        </div>
      </div>
    </div>
  );
}
export default MonEditeur;
