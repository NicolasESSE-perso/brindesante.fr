import React, { useState } from "react";
import Style from "./Apropos.module.css";
import Login from "./Login/Login";

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

      <div>
        <h1 className={Style.Titre}>A propos de Brin de santé</h1>
        <p>
          Je suis médecin généraliste installée en cabinet et exerçant également
          aux urgences pédiatriques. Je constate au quotidien, les inquiétudes
          et le sentiment d'être démuni que peuvent générer certains maladies.
        </p>
        <p>
          J'ai à coeur de vous épauler et de vous accompagner face aux symptômes
          fréquents et aux pathologies chroniques afin d'y faire face au mieux
          au quotidien. Aussi, j'ai créé ce site internet pour que vous puissiez
          vous y référer aussi souvent que nécessaire pour vous aider à vous
          soulager ou soulager les personnes de votre entourage
        </p>
      </div>
      <div className={Style.Login}></div>

      <div className={Style.Footer}>
        <a href={"mailto:" + email}>Me contacter</a>
        <div onClick={(e) => setAfficherConnexion(true)}>Connexion</div>
      </div>
    </div>
  );
}
export default Apropos;
