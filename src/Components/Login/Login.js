import React, { useState, useContext } from "react";
import Style from "./Login.module.css";
import LogoDelphine from "../../Images/Logo300.png";
import ImageConnexion from "../../Images/ImageConnexion.svg";
import { sha256 } from "js-sha256";
import MessageErreur from "./MessageErreur";
import { DelphineContext } from "../../Context/DelphineContext";

function Login({ onConnect, onClose }) {
  // eslint-disable-next-line
  const [delphine, setDelphine] = useContext(DelphineContext);

  const [MotDePasse, setMotDePasse] = useState("");
  const Key =
    "332662390483642caa3365d61fcafacc2aa6e3e73eacd73cd2203c2111e6da8b";
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    //NIE j'évite le repost
    event.preventDefault();
    //NIE je controle le mot de passe
    if (sha256(MotDePasse) === Key) {
      //NIE je stocke le fait que l'on est connecté
      setDelphine("Connectée");

      //NIE je retourne que je suis connecté
      onConnect();
    } else {
      setMessage("Mot de passe faux");
    }
  };

  const FermerPopUp = (e) => {
    if (e.target.id === "FondNoir") {
      onClose();
    }
  };

  return (
    <div className={Style.PageLogin} onClick={FermerPopUp} id="FondNoir">
      <div
        className={Style.PopUp}
        style={{ backgroundImage: `url(${ImageConnexion})` }}
      >
        <img src={LogoDelphine} alt="logo" className={Style.Logo} />
        <form className={Style.MonFormulaire} onSubmit={onSubmit}>
          <input
            type="password"
            name="passowrd"
            placeholder="Mot de passe"
            className={Style.MotDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            value={MotDePasse}
          />
          <button className={Style.BoutonConnexion}>Connexion</button>
          {message ? <MessageErreur message={message} /> : ""}
        </form>
      </div>
    </div>
  );
}
export default Login;
