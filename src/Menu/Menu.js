import React from "react";
import Titre from "./Titre";
import LogoDelphine from "./LogoDelphine";
import GroupeFiches from "./GroupeFiches";
import { Link } from "react-router-dom";
import Style from "./Menu.module.css";

function Menu() {
  return (
    <div className={Style.Menu}>
      <div className={Style.Titre}>
        <Titre />
      </div>
      <div className={Style.Logo}>
        <Link to="/">
          <LogoDelphine />
        </Link>
      </div>
      <div className={Style.LiensFiches}>
        <GroupeFiches />
      </div>
    </div>
  );
}
export default Menu;
