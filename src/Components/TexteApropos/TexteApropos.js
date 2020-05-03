import React, { useContext } from "react";
import { ParamContext } from "../../Context/ParamContext";
import TextareaAutosize from "react-autosize-textarea";

function TexteApropos({ value, onChange, isReadOnly }) {
  const contexte = useContext(ParamContext);
  const param = contexte.param;
  console.log(param);

  const style = {
    fontSize: "18px",
    border: "none",
    resize: "none",
    textAlign: "justify",
    width: "100%",
    opacity: 1,
    "-webkit-text-fill-color": "#333",
  };

  if (isReadOnly) {
    return (
      <TextareaAutosize style={style} disabled value={param.texte_apropos} />
    );
  } else {
    return (
      <TextareaAutosize
        style={style}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    );
  }
}

export default TexteApropos;
