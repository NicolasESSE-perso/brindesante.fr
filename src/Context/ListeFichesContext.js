import React, { useState, createContext, useEffect } from "react";

export const ListeFichesContext = createContext();

export const FichesProvider = (props) => {
  const monUrlAPI = `${process.env.REACT_APP_URL_API_BRINDESANTE}/fiches`;

  //NIE je créé un tableau vide que va contenir les fiches.
  const [fiches, setFiches] = useState([]);
  const [groupes, setGroupes] = useState([]);

  //NIE fonction pour récupérer mes données de l'API
  const getFiches = () => {
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

      //NIE j'enregistre les fiches dans la constante créée
      setFiches(fichesJson);
    };
    //NIE j'utilise la fonction pour récupérer mes données
    fetchData();
  };

  //NIE récupération des groupes
  const getGroupes = () => {
    const tempArray = [];
    fiches.forEach((fiche) => {
      const exist = tempArray.includes(fiche.groupe);
      //console.log(exist);
      if (!exist && fiche.groupe) {
        //console.log("Ajout :" + fiche.groupe);
        //! NIE attention ca retourne la longueur du tableau d'où le tableau temporaire
        tempArray.push(fiche.groupe);
        //console.log(tempArray);
      }

      //NIE affichage par ordre alphabtique des groupes

      tempArray.sort();
    });
    setGroupes(tempArray);
  };

  useEffect(() => {
    //NIE je récupère les groupes des fiches

    getGroupes();
    // eslint-disable-next-line
  }, [fiches]);

  //NIE à la construction du composant
  useEffect(() => {
    getFiches();
    //NIE si je déclare en dehors du useEffect j'ai des erreurs
    // eslint-disable-next-line
  }, []);

  return (
    <ListeFichesContext.Provider
      value={{ fiches: fiches, getFiches: getFiches, groupes: groupes }}
    >
      {props.children}
    </ListeFichesContext.Provider>
  );
};
