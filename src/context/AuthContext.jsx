import { createContext, useState, useContext } from "react";

//! Crear el contexto de autentificacion
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, setUser } = useState(null);

  const login = (username) => {
    // Simulando la creación de un token (en una app real, esto seríagenerado por un servidor)
    const token = `fake-token-${username}`;
    localStorage.setItem("authToken", token);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
