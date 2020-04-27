import React from "react";
import Style from "./CheckboxAccueil.module.css";

function CheckBoxAccueil({ checked, onChange }) {
  return (
    <div className={Style.CheckBoxAccueil}>
      <input
        id="afficherEnPageAccueil"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className={Style.Label} htmlFor="afficherEnPageAccueil">
        Afficher en page d'accueil
      </label>
    </div>
  );
}

export default CheckBoxAccueil;
