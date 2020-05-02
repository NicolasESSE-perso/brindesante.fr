import React, { useState, useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ListeFichesContext } from "../../Context/ListeFichesContext";

export default function SelectGroupeFiche({ value, onChange }) {
  //const options = ["Symtomes", "Tests Nicolas"];
  const [texte, setTexte] = useState("");
  const [inputValue, setInputValue] = useState("");

  //NIE récupération des groupes dans le contexte
  const contexte = useContext(ListeFichesContext);
  const groupes = contexte.groupes;

  useEffect(() => {
    if (value) {
      setTexte(value);
    }
  }, [value]);

  //NIE etats pour l'autocomplete value
  //console.log(value);
  return (
    <div>
      <Autocomplete
        freeSolo
        value={texte}
        onChange={(event, newValue) => {
          //console.log(newValue);
          setTexte(newValue);
          onChange(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newValue) => {
          //console.log(newValue);
          setInputValue(newValue);
          onChange(newValue);
        }}
        id="controllable-states-demo"
        options={groupes}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="GROUPE DE FICHES" variant="outlined" />
        )}
      />
    </div>
  );
}
