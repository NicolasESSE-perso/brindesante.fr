import React from "react";
import Style from "./Apropos.module.css";

function Apropos() {
  return (
    <div className={Style.Apropos}>
      <h1 className={Style.Titre}>A propos de Brin de santé</h1>
      <p className={Style.Texte}>
        Je suis médecin généraliste installée en cabinet et exerçant également
        aux urgences pédiatriques. Je constate au quotidien, les inquiétudes et
        le sentiment d'être démuni que peuvent générer certains maladies. J'ai à
        coeur de vous épauler et de vous accompagner face aux symptômes
        fréquents et aux pathologies chroniques afin d'y faire face au mieux au
        quotidien. Aussi, j'ai créer ce site internet pour que vous puissiez
        vous y référer aussi souvent que nécessaire pour vous aider à vous
        soulager ou soulager les personnes de votre entourage
      </p>
    </div>
  );
}
export default Apropos;
