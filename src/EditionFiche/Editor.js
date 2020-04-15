import React, { useState, useEffect } from "react";
import RichTextEditor from "react-rte";

function MonEditeur({ value, onChange, placeholder, colorBarre, returnHtml }) {
  const [richText, setRichText] = useState(RichTextEditor.createEmptyValue());

  //NIE au chargement uniquement je récupère le texte passé en paramètre et je m'en sert pour initliser le composante
  useEffect(
    (richText) => {
      console.log();
      setRichText(richText);
    },
    [richText]
  );

  //NIE quand le texte change, je stocke le richText et je renvoie le texte en string
  const onTextChange = (value) => {
    setRichText(value);
    //onChange(value);
    //returnHtml(value.toString("html"));
  };

  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ["INLINE_STYLE_BUTTONS", "BLOCK_TYPE_BUTTONS", "LINK_BUTTONS"],
    INLINE_STYLE_BUTTONS: [
      { label: "Bold", style: "BOLD", className: "boutonEditor" },
      { label: "Italic", style: "ITALIC" },
      { label: "Underline", style: "UNDERLINE" },
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: "UL", style: "unordered-list-item" },
      { label: "OL", style: "ordered-list-item" },
    ],
  };

  const rootStyle = {
    backgroundColor: colorBarre,
    padding: 0,
    border: "none",
  };

  const toolbarStyle = {
    //backgroundColor: "#898A82",
    height: "40px",
    padding: "5px",
    marginLeft: "0px",
  };

  const editorStyle = {
    height: "200px",
    fontSize: "16px",
    fontFamily: "Lato",
    placeholder: { color: "#2E7FAE" },
    backgroundColor: "#FFFFFF",
    border: "1px solid #DDD",
    marginLeft: "Opx",
  };

  return (
    <div>
      <RichTextEditor
        value={richText}
        onChange={onTextChange}
        placeholder={placeholder}
        toolbarConfig={toolbarConfig}
        rootStyle={rootStyle}
        toolbarStyle={toolbarStyle}
        editorStyle={editorStyle}
      />
    </div>
  );
}

export default MonEditeur;
