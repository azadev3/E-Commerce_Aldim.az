import React, { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [tokenState, setTokenState] = useState("");

  return (
    <TokenContext.Provider value={{ tokenState, setTokenState }}>
      {children}
    </TokenContext.Provider>
  );
}

export { TokenContext, TokenProvider };
