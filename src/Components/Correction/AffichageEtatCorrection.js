import React from "react";

export default function AffichageEtatCorrection({ etat, dateResolution }) {
  let Style = {
    height: "24px",
    borderRadius: "15px",
    backgroundColor: "#BEBEBE",
    padding: "5px 20px 10px 20px",
    fontSize: "12px",
    fontWeight: "Bold",
    color: "white",
    textAlign: "center",
  };

  let StyleDate = {
    fontSize: "12px",
    fontStyle: "italic",
    color: "#08AA08",
    marginTop: "5px",
  };

  if (etat === "CORRIGE") {
    Style = { ...Style, backgroundColor: "#08AA08" };
  }
  if (etat === "EN DEVELOPPEMENT") {
    Style = { ...Style, backgroundColor: "#2798C9" };
  }

  return (
    <div>
      <div style={Style}>{etat}</div>
      <div style={StyleDate}>{dateResolution}</div>
    </div>
  );
}
