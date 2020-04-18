import React, { useContext } from "react";
import Titre from "./Titre";
import LogoDelphine from "./LogoDelphine";
import GroupeFiches from "./GroupeFiches";
import Lienfiche from "./Lienfiche";
import { Link } from "react-router-dom";
import { ListeFichesContext } from ".././ListeFichesContext";
import Style from "./Menu.module.css";

function Menu() {
  const [fiches] = useContext(ListeFichesContext);

  return (
    <div>
      <Link to="/">
        <Titre />
      </Link>
      <div className={Style.Menu}>
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
