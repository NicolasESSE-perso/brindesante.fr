import React, { useState } from "react";
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
  const [value, setValue] = useState(checked);

  const handleChange = (e) => {
    setValue(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div className={Style.MasquerLaFiche}>
      <Switch id="switch" checked={value} onChange={handleChange} />
      <label htmlFor="switch">Masquer la fiche</label>
    </div>
  );
}

export default MasquerLaFiche;
