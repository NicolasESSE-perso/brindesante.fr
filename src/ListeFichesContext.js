import React, { useState, createContext, useEffect } from "react";

export const ListeFichesContext = createContext();

export const FichesProvider = (props) => {
  const monUrlAPI = `${process.env.REACT_APP_URL_API_BRINDESANTE}/fiches`;

  //NIE je créé un tableau vide que va contenir les fiches.
  const [fiches, setFiches] = useState([]);
  useEffect(() => {
    //NIE si je déclare en dehors du useEffect j'ai des erreurs
    const fetchData = async () => {
      //NIE je récupère les data depuis l'API
      const data = await fetch(
        monUrlAPI
        //`${process.env.REACT_APP_URL_API_BRINDESANTE}/fiches`
      );
      //NIE je convertis ce que je récupère en JSON pour obtenir un tabelau de fiches :)
      const fichesJson = await data.json();
      //NIE c'est pratique pour développer
      //NIE cela evite de faire des appels en boucle à l'API et de payer une fortune
      console.log({
        composant: "ListeFichesContext",
        url: monUrlAPI,
        reponse: fichesJson,
      });

      //NIE je trie par ordre alphabétique

      //NIE j'enregistre les fiches dans la constante créée
      setFiches(fichesJson);
    };

    //NIE j'utilise la fonction pour récupérer mes données
    fetchData();
  }, [monUrlAPI]);

  return (
    <ListeFichesContext.Provider value={[fiches, setFiches]}>
      {props.children}
    </ListeFichesContext.Provider>
  );
};
