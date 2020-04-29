import React from "react";
import Style from "./MessageErreur.module.css";

function MessageErreur({ message }) {
  return (
    <div className={Style.MessageErreur}>
      <p className={Style.Erreur}>{message}</p>
    </div>
  );
}

export default MessageErreur;
