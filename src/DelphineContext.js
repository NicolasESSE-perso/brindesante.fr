import React, { useState, createContext } from "react";

export const DelphineContext = createContext();

export const DelphineProvider = (props) => {
  //NIE je stocke l'utilisateur connecté :)
  const [isConnected, setIsConnected] = useState("");

  return (
    <DelphineContext.Provider value={[isConnected, setIsConnected]}>
      {props.children}
    </DelphineContext.Provider>
  );
};
