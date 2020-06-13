import React, { useState, useEffect } from "react";
import TextareaAutosize from "react-autosize-textarea";
import Style from "./EditionCorrection.module.css";
import BoutonEnregistrer from "../Boutons/BoutonEnregistrer";
import EtatCorrection from "./EtatCorrection";
import IconeFermer from "../../Images/icones/Fermer.svg";

export default function EditionCorrection({ correction, onClose, onSave }) {
  const [id, setId] = useState("");
  const [titrePanneau, setTitrePanneau] = useState("Nouvelle correction");
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [etat, setEtat] = useState("EN ATTENTE");
  const [dateResolution, setDateResolution] = useState("");
  const [method, setMethod] = useState("POST");

  useEffect(() => {
    if (correction._id) {
      console.log(correction);
      setId(correction._id);
      setTitre(correction.titre);
      setDescription(correction.description);
      setCommentaire(correction.commentaire);
      setEtat(correction.etat);
      setMethod("PATCH");
      setTitrePanneau(correction.titre);
    }
  }, [correction]);

  const modifEtat = (value) => {
    setEtat(value);
    if (value === "CORRIGE") {
      let dateCorrection = new Date();
      setDateResolution(dateCorrection);
    } else {
      setDateResolution("");
    }
  };

  const sauvegarder = async (event) => {
    //NIE on appelle l'API en PATCH
    const monUrlAPI = `${process.env.REACT_APP_URL_API_BRINDESANTE}/corrections/${id}`;
    console.log(monUrlAPI);
    console.log(method);
    await fetch(monUrlAPI, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titre: titre,
        description: description,
        commentaire: commentaire,
        etat: etat,
        date_resolution: dateResolution,
      }),
    });
    //NIE
    onSave();
  };

  return (
    <div key={id} className={Style.Correction}>
      <div className={Style.BlocTitrePanneau}>
        <img
          className={Style.IconeFermerPanneau}
          src={IconeFermer}
          alt="Fermer"
          onClick={onClose}
        />
        <div className={Style.TitrePanneau}>{titrePanneau}</div>
      </div>
      <div className={Style.Formulaire}>
        <label className={Style.Label}>Titre du bug ou de l'évolution</label>
        <TextareaAutosize
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          className={Style.Titre}
          style={{ resize: "none" }}
          placeholder="Titre du bug ou de l'évolution"
        />
        <label className={Style.Label}>Titre du bug ou de l'évolution</label>
        <TextareaAutosize
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={Style.Description}
          style={{
            resize: "none",
          }}
          placeholder="Description"
        />
        <div className={Style.EtatCorrection}>
          <EtatCorrection etat={etat} onChange={(value) => modifEtat(value)} />
        </div>
        <BoutonEnregistrer onClick={sauvegarder} />
      </div>
    </div>
  );
}
