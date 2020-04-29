import React from "react";
import GroupeFiches from "../../Components/Menu/GroupeFiches";
import Style from "./MenuMobile.module.css";

function MenuMobile() {
  return (
    <div className={Style.MenuMobile}>
      <GroupeFiches />
    </div>
  );
}

export default MenuMobile;
