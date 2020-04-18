import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/Menu";
import Entete from "./Entete";
import Apropos from "./Apropos";
import Recherche from "./Recherche/Recherche";
import Fiche from "./Fiche/Fiche";
import Homepage from "./Homepage";
import Menupage from "./Menupage";
import { FichesProvider } from "./ListeFichesContext";
import EditionFiche from "./EditionFiche/EditionFiche";
import MonEditeur from "./EditionFiche/MonEditeur/MonEditeur";
//import MonEditeurReadOnly from "./EditionFiche/MonEditeur/MonEditeurReadOnly";
//import Editor from "./EditionFiche/Editor";
//import EditionListeArticles from "./EditionFiche/Articles/EditionListeArticles";

function App() {
  return (
    <Router>
      <FichesProvider>
        <div className="App">
          <Menu />
          <div className="Page">
            <Entete />
            <Route path="/Apropos" component={Apropos} />
            <Route path="/Fiche/:id" component={Fiche} />
            <Route path="/" exact component={Homepage} />
            <Route path="/Menu" component={Menupage} />
            <Route path="/Recherche" component={Recherche} />
            <Route path="/dev" component={EditionFiche} />
            <Route path="/monediteur" component={MonEditeur} />
          </div>
        </div>
      </FichesProvider>
    </Router>
  );
}

export default App;
