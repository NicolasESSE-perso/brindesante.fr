import React, { useState, useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import Style from "./ActiverDesactiver.module.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function ActiverDesactiver({ texte, checked, onChange, name }) {
  const [value, setValue] = useState(false);

  //NIE initilisation du composant
  useEffect(() => {
    setValue(false);
  }, []);

  //NIE
  useEffect(() => {
    if (checked) {
      setValue(checked);
    }
  }, [checked]);

  const handleChange = (e) => {
    setValue(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div className={Style.Zoning}>
      <FormControlLabel
        control={<Switch checked={value} onChange={handleChange} name={name} />}
        label={texte}
      />
    </div>
  );
}

export default ActiverDesactiver;
