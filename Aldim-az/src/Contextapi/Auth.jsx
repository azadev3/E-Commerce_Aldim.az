import React, { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

     const [auth, setAuth] = useState(false);

     return (
          <AuthContext.Provider value={{ auth, setAuth }}>
               {children}
          </AuthContext.Provider>
     )
}

export { AuthContext, AuthProvider };