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
import SelectGroupeFiche from "./Components/EditionFiche/SelectGroupeFiche";
import Param from "./Pages/Param";
import { ParamProvider } from "./Context/ParamContext";

function App() {
  return (
    <Router>
      <ParamProvider>
        <FichesProvider>
          <DelphineProvider>
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
                <Route path="/dev" component={SelectGroupeFiche} />
                <Route path="/editeur" component={MonEditeur} />
                <Route path="/param" component={Param} />
              </div>
            </div>
          </DelphineProvider>
        </FichesProvider>
      </ParamProvider>
    </Router>
  );
}

export default App;
