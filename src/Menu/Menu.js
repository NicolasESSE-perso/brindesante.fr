import React, { useEffect, useState } from "react";
import Titre from "./Titre";
import LogoDelphine from "./LogoDelphine";
import GroupeFiches from "./GroupeFiches";
import Lienfiche from "./Lienfiche";
import { Link } from "react-router-dom";

function Menu() {
  //Se lance uniquement quand le composant se mount à cause de []
  //sinon on peut préciser les cas de figures
  useEffect(() => {
    fetchFiches();
  }, []);

  const [items, setItems] = useState([]);

  const fetchFiches = async () => {
    const data = await fetch("http://api.brindesante.fr/fiches");

    //je convertis ce que je récupère en JSON pour obtenir un tabelau de fiches :)
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      <Link to="/">
        <Titre />
        <LogoDelphine />
      </Link>
      <div className="Menu">
        <GroupeFiches />

        <div>
          {items.map(item => (
            <h1 key={item._id}>
              <Lienfiche titre={item.titre} fiche_id={item._id} />
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Menu;
