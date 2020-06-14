import React, { useState, useEffect } from "react";
import Style from "./Urgences.module.css";
import ImageUrgences from "../../Images/Urgences.png";
import Editeur from "../MonEditeur/MonEditeur";

//NIE pour utiliser dangerouslySetInnerHTML pour le richtext
const ToHtml = (data) => {
  return { __html: data };
};

export default function Urgences({ value, onChange, readOnly }) {
  // const [texteUrgence, setTexteUrgence] = useState("");
  const [readonly, setReadonly] = useState(false);

  useEffect(() => {
    setReadonly(readOnly);
  }, [readOnly]);

  return (
    <div className={Style.Urgences}>
      <div className={Style.BlocImage}>
        <div className={Style.BorderImage}> </div>
        <img
          src={ImageUrgences}
          style={{ width: "70px", height: "70px" }}
          alt=""
        />
        <div className={Style.BorderImage}></div>
      </div>
      <div className={Style.Titre}>
        <span className={Style.TitreRouge}>J'APPELLE LE 15</span> (SAMU) ou le
        <span className={Style.TitreRouge}>114</span> (pour les personnes
        malentendantes) :
      </div>
      {readonly === true ? (
        <div className={Style.Texte}>
          <p dangerouslySetInnerHTML={ToHtml(value)}></p>
        </div>
      ) : (
        <Editeur textHtml={value} onTextChange={(texte) => onChange(texte)} />
      )}
    </div>
  );
}
