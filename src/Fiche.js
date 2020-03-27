import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Fiche({ match }) {
  //Se lance uniquement quand le composant se mount à cause de []
  //sinon on peut préciser les cas de figures
  useEffect(() => {
    fetchItem();
  }, [match.params.id]);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.brindesante.fr/fiches/${match.params.id}`
    );

    //je convertis ce que je récupère en JSON pour obtenir un tabelau de fiches :)
    const item = await fetchItem.json();

    setItem(item);
    console.log(item);
  };

  function createMarkup() {
    return {
      __html: "Risques<br>sur plursieurs<br>lignes avec du <b>gras</b>"
    };
  }

  return (
    <div className="Fiche">
      <div className="FicheTitre">
        <h1>{item.titre_fiche}</h1>
        <p>{item.description}</p>
      </div>
      <div className="FicheSymptomes">
        <div>
          <h2>Symptômes</h2>
        </div>
        <div>
          <p>{item.symptomes}</p>
        </div>
      </div>

      <div className="FicheWrapper">
        <div className="Conseil">
          <h2>Que faire?</h2>
          <p>{item.conseil}</p>
        </div>

        <div className="AllezMedecin">
          <h2>Je vais chez le médecin si :</h2>
          <p>{item.aller_chez_le_medecin}</p>
        </div>

        <div className="Enfant">
          <h2>Et chez l'enfant ?</h2>
          <p>{item.enfant}</p>
        </div>

        <div className="Risque">
          <h2>Risques</h2>
          <p>{item.risque}</p>
        </div>
      </div>
    </div>
  );
}
export default Fiche;
