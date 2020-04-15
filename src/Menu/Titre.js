import React from "react";
import ImgTitre from "./Brindesante.svg";

function Titre() {
  return (
    <div className="Titre">
      <img src={ImgTitre} alt="Titre" />
      <p>Conseils médicaux & symptômes courants</p>
    </div>
  );
}

export default Titre;
