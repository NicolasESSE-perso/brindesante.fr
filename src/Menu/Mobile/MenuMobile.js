import React from "react";
import GroupeFiches from "../GroupeFiches";
import Style from "./MenuMobile.module.css";

function MenuMobile(props) {
  console.log(props);
  return (
    <div className={Style.MenuMobile}>
      <GroupeFiches />
    </div>
  );
}

export default MenuMobile;
