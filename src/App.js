import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/Menu";
import Entete from "./Entete";
import Apropos from "./Apropos";
import Recherche from "./Recherche";
import Fiche from "./Fiche";
import Homepage from "./Homepage";
import Menupage from "./Menupage";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="Page">
          <Entete />
          <Route path="/Apropos" component={Apropos} />
          <Route path="/Fiche/:id" component={Fiche} />
          <Route path="/" exact component={Homepage} />
          <Route path="/Menu" component={Menupage} />
          <Route path="/Recherche" component={Recherche} />
        </div>
      </div>
    </Router>
  );
}

export default App;
