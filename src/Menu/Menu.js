import React from "react";
import Titre from "./Titre";
import LogoDelphine from "./LogoDelphine";
import GroupeFiches from "./GroupeFiches";

function Menu() {
  return (
    <div className="Menu">
      <Titre />
      <LogoDelphine />
      <GroupeFiches />
    </div>
  );
}
export default Menu;
