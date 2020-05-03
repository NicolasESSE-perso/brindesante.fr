import React, { useState, createContext, useEffect } from "react";

export const ParamContext = createContext();

export const ParamProvider = (props) => {
  const monUrlAPI = `${process.env.REACT_APP_URL_API_BRINDESANTE}/param`;

  //NIE je créé un objet contenant le contexte
  const [param, setParam] = useState({});

  //NIE fonction pour récupérer mes données de l'API
  const getParam = () => {
    const fetchData = async () => {
      //NIE je récupère les data depuis l'API
      const data = await fetch(monUrlAPI);
      //NIE je convertis ce que je récupère en JSON pour obtenir un tabelau de fiches :)
      const paramJson = await data.json();
      //NIE c'est pratique pour développer
      //NIE cela evite de faire des appels en boucle à l'API et de payer une fortune
      console.log({
        composant: "ParamContext",
        url: monUrlAPI,
        reponse: paramJson,
      });
      //NIE j'enregistre les fiches dans la constante créée
      setParam({
        texte_accueil: paramJson.texte_accueil,
        texte_apropos: paramJson.texte_apropos,
      });
    };
    //NIE j'utilise la fonction pour récupérer mes données
    fetchData();
  };

  //NIE à la construction du composant
  useEffect(() => {
    getParam();
    //NIE si je déclare en dehors du useEffect j'ai des erreurs
    // eslint-disable-next-line
  }, []);

  return (
    <ParamContext.Provider value={{ param: param, getParam: getParam }}>
      {props.children}
    </ParamContext.Provider>
  );
};
