import React, { useContext } from "react";
import { ParamContext } from "../../Context/ParamContext";
import TextareaAutosize from "react-autosize-textarea";

function TexteBrinDeSante({ value, onChange, isReadOnly }) {
  const contexte = useContext(ParamContext);
  const param = contexte.param;
  console.log(param);

  const style = {
    fontFamily: "Pacifico",
    fontSize: "22px",
    border: "none",
    resize: "none",
    textAlign: "justify",
    opacity: 1,
    width: "100%",
    WebkitTextFillColor: "#6fa2a7",
  };

  if (isReadOnly) {
    return (
      <TextareaAutosize style={style} disabled value={param.texte_accueil} />
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

export default TexteBrinDeSante;
