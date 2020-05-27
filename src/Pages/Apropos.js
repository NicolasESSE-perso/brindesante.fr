import React, { useState, useContext, useEffect } from "react";
import Style from "./Apropos.module.css";
import Login from "../Components/Login/Login";
import { Link } from "react-router-dom";
import TexteApropos from "../Components/TexteApropos/TexteApropos";
import { ParamContext } from "../Context/ParamContext";
import LogoDelphine from "../Components/Menu/LogoDelphine";

function Apropos() {
  const [email, setEmail] = useState("");
  const contexte = useContext(ParamContext);
  const param = contexte.param;

  useEffect(() => {
    if (param) {
      setEmail(param.email_contact);
    }
  }, [param]);

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
          <LogoDelphine />
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
