import React from "react";
import Style from "./BoutonModifier.module.css";

function BoutonModifier({ texte, onClick }) {
  return (
    <div className={Style.BoutonModifier} onClick={onClick}>
      {texte}
    </div>
  );
}

export default BoutonModifier;
