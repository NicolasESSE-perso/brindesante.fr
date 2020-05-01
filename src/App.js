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
import EditionFiche from "./EditionFiche/EditionFiche";
import MonEditeur from "./Components/MonEditeur/MonEditeur";

function App() {
  return (
    <Router>
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
              <Route path="/dev" component={EditionFiche} />
              <Route path="/editeur" component={MonEditeur} />
            </div>
          </div>
        </DelphineProvider>
      </FichesProvider>
    </Router>
  );
}

export default App;
