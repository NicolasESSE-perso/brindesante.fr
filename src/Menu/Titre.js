import React from "react";
import ImgTitre from "./Brindesante.svg";
import IconeMenu from "../icones/menu.svg";
import Style from "./Titre.module.css";
import LoupeMobile from "../icones/LoupeMobile.svg";
import FermerMobile from "../icones/FermerMobile.svg";
import { Link } from "react-router-dom";

function Titre() {
  console.log(window.location.pathname);

  return (
    <div className={Style.Titre}>
      <div className={Style.TitreEtMenu}>
        <Link to="/MenuMobile">
          <img
            className={Style.MenuMobile}
            src={
              window.location.pathname === "/MenuMobile"
                ? FermerMobile
                : IconeMenu
            }
            alt="Menu"
          />
        </Link>
        <div className={Style.ImageTitre}>
          <Link to="/">
            <img src={ImgTitre} alt="Titre" />
          </Link>
        </div>
        <div className={Style.RechercheMobile}>
          <Link to="/Recherche">
            <img src={LoupeMobile} alt="Recherche" />
          </Link>
        </div>
      </div>
      <div>
        <p>Conseils médicaux & symptômes courants</p>
      </div>
    </div>
  );
}

export default Titre;
