import React from "react";
import Switch from "@material-ui/core/Switch";
//import { withStyles } from "@material-ui/core/styles";
import Style from "./MasquerLaFiche.module.css";

//NIE <PurpleSwitch /> pour customiser la couleur
/*
const PurpleSwitch = withStyles({
  switchBase: {
    color: "#E27FAE",
    "&$checked": {
      color: "red",
    },
    "&$checked + $track": {
      backgroundColor: "green",
    },
  },
  checked: {},
  track: {},
})(Switch);

const style = {
  height: "30px",
};
*/

function MasquerLaFiche({ checked, onChange }) {
  return (
    <div className={Style.MasquerLaFiche}>
      <Switch
        id="switch"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor="switch">Masquer la fiche</label>
    </div>
  );
}

export default MasquerLaFiche;
