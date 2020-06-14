import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Entete from "./Components/Entete/Entete";
import Apropos from "./Pages/Apropos";
import Recherche from "./Pages/Recherche";
import Fiche from "./Pages/Fiche";
import Homepage from "./Pages/Homepage";
import { FichesProvider } from "./Context/ListeFichesContext";
import Login from "./Components/Login/Login";
import { DelphineProvider } from "./Context/DelphineContext";
import MenuMobile from "./Pages/Mobile/MenuMobile";
import MonEditeur from "./Components/MonEditeur/MonEditeur";
//import EditionFiche from "./EditionFiche/EditionFiche";
import Param from "./Pages/Param";
import { ParamProvider } from "./Context/ParamContext";
import Stats from "./Pages/Stats";
import Corrections from "./Pages/Corrections";
import Urgences from "./Components/EditionFiche/Urgences";

function App() {
  return (
    <Router>
      <ParamProvider>
        <DelphineProvider>
          <FichesProvider>
            <div className="App">
              <Menu />
              <div className="Page">
                <Entete />
                <Route path="/Apropos" component={Apropos} />
                <Route path="/Fiche/:id" component={Fiche} />
                <Route path="/" exact component={Homepage} />
                <Route path="/Recherche" component={Recherche} />
                <Route path="/Login" component={Login} />
                <Route path="/MenuMobile" component={MenuMobile} />
                <Route path="/dev" component={Urgences} />
                <Route path="/editeur" component={MonEditeur} />
                <Route path="/param" component={Param} />
                <Route path="/stats" component={Stats} />
                <Route path="/corrections" component={Corrections} />
              </div>
            </div>
          </FichesProvider>
        </DelphineProvider>
      </ParamProvider>
    </Router>
  );
}

export default App;
