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
      `http://api.brindesante.fr/fiches/${match.params.id}`
    );

    //je convertis ce que je récupère en JSON pour obtenir un tabelau de fiches :)
    const item = await fetchItem.json();

    setItem(item);
    console.log(item);
  };

  return (
    <div className="Fiche">
      <h1>{item.titre}</h1>
    </div>
  );
}
export default Fiche;
