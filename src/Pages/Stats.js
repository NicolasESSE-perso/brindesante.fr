import React, { useState, useEffect } from "react";
import Style from "./Stats.module.css";

const monUrlAPI = `${process.env.REACT_APP_URL_API_BRINDESANTE}/stats/pages`;

function Stats() {
  const [stats, setStats] = useState([]);

  //NIE récupération des stats dans l'API
  const getStats = async () => {
    const data = await fetch(monUrlAPI);
    //NIE je convertis ce que je récupère en JSON pour obtenir un tabelau de fiches :)
    const paramJson = await data.json();
    //NIE c'est pratique pour développer
    //NIE cela evite de faire des appels en boucle à l'API et de payer une fortune
    console.log({
      composant: "Stats",
      url: monUrlAPI,
      reponse: paramJson,
    });
    //NIE j'enregistre les données dans la constante créée
    setStats(paramJson);
  };

  //NIE à la construction du composant
  useEffect(() => {
    getStats();
    //NIE si je déclare en dehors du useEffect j'ai des erreurs
    // eslint-disable-next-line
  }, []);

  return (
    <div className={Style.Stats}>
      <h1>Stats par fiche</h1>
      <div className={Style.Tableau}>
        <div className={Style.Entete}>
          <div style={{ width: 200 }}>Nom de la fiche</div>
          <div style={{ width: 200 }}>Nb de consultations</div>
        </div>

        {stats.map((row) => (
          <div className={Style.Ligne}>
            <div style={{ width: 200 }}>{row._id.page_nom}</div>
            <div style={{ width: 200, textAlign: "right" }}>{row.nombre}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
