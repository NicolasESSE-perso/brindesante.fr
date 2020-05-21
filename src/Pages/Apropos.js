import React, { useState } from "react";
import Style from "./Apropos.module.css";
import Login from "../Components/Login/Login";
import LogoDelphine from "../Images/Logo150.svg";
import { Link } from "react-router-dom";
import TexteApropos from "../Components/TexteApropos/TexteApropos";

function Apropos() {
  const email = "nicolas.esse@gmail.com";
  const [afficherConnexion, setAfficherConnexion] = useState(false);

  const fermerPopUp = () => {
    setAfficherConnexion(false);
  };

  return (
    <div className={Style.Apropos}>
      {afficherConnexion ? (
        <Login onClose={fermerPopUp} onConnect={fermerPopUp} />
      ) : (
        ""
      )}

      <div className={Style.Logo}>
        <Link to="/">
          <img src={LogoDelphine} alt="Logo" />
        </Link>
      </div>
      <h1 className={Style.Titre}>A propos de Brin de santé</h1>

      <TexteApropos isReadOnly={true} />

      <div className={Style.Login}></div>

      <div className={Style.Footer}>
        <a href={"mailto:" + email} style={{ color: "#6fa2a7" }}>
          Me contacter
        </a>
        <div
          className={Style.Connexion}
          onClick={(e) => setAfficherConnexion(true)}
        >
          Connexion
        </div>
      </div>
    </div>
  );
}
export default Apropos;
