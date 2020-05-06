import React, { useState, createContext } from "react";

export const DelphineContext = createContext();

export const DelphineProvider = (props) => {
  //NIE je stocke l'utilisateur connecté :)
  const [isConnected, setIsConnected] = useState("");

  //NIE pour ne pas m'authentifier à chaque compilation
  useState(() => {
    if (process.env.REACT_APP_CONTEXTE === "devC") {
      setIsConnected("Nicolas");
    }
  }, []);

  return (
    <DelphineContext.Provider value={[isConnected, setIsConnected]}>
      {props.children}
    </DelphineContext.Provider>
  );
};
