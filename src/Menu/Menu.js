import React, { useContext } from "react";
import Titre from "./Titre";
import LogoDelphine from "./LogoDelphine";
import GroupeFiches from "./GroupeFiches";
import Lienfiche from "./Lienfiche";
import { Link } from "react-router-dom";
import { ListeFichesContext } from ".././ListeFichesContext";

function Menu() {
  const [fiches] = useContext(ListeFichesContext);

  return (
    <div>
      <Link to="/">
        <Titre />
      </Link>
      <div className="Menu">
        <Link to="/">
          <LogoDelphine />
        </Link>
        <GroupeFiches />
        <div>
          {fiches.map((fiche) => (
            <Lienfiche
              titre={fiche.titre}
              fiche_id={fiche._id}
              key={fiche._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Menu;
