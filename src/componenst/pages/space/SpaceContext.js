import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const SpaceContext = createContext();

export const SpaceContextProvider = ({ children }) => {
  const [backg, setbackg] = useState("homeB");
  return (
    <SpaceContext.Provider value={{ backg, setbackg }}>
      {children}
    </SpaceContext.Provider>
  );
};

export const useSpaceContext = () => useContext(SpaceContext);
