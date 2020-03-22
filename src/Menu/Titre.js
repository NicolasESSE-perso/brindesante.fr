import React from "react";
import ImgTitre from "./Brindesante.svg";
import ImgLogo from "./LogoDelphine.svg";

function Titre() {
  return (
    <div>
      <div className="Titre">
        <img src={ImgTitre} alt="Titre" />
        <p>Conseils médicaux & symptômes courants</p>
      </div>
      <div>
        {" "}
        <img className="Logo" src={ImgLogo} alt="Logo" />
      </div>
    </div>
  );
}

export default Titre;
