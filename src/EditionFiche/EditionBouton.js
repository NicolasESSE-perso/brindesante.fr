import React from "react";

function EditionBouton({ texte, onTexteChange }) {
  const style = {
    backgroundColor: "#c4e3e6",
    height: "50px",
    width: "240px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "6px",
    marginBottom: "10px",
    textAlign: "center",
    border: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div>
      <input
        style={style}
        type="text"
        value={texte}
        onChange={(e) => {
          onTexteChange(e.target.value);
        }}
      />
    </div>
  );
}

export default EditionBouton;
