import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({ nombre: "", email: "" });

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (product) => {
    setCarrito([...carrito, product]);
    alert(` ${product.modelo} agregado al carrito`);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    alert("Carrito vaciado");
  };

  const eliminarDelCarrito = (product) => {
    setCarrito(carrito.filter((item) => item.id !== product.id));
    alert(` ${product.modelo} eliminado del carrito`);
  };

  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setUsuario({ nombre: "", email: "" });
    vaciarCarrito();
  };

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    usuario,
    setUsuario,
    cerrarSesion,

    carrito,
    agregarAlCarrito,
    vaciarCarrito,
    eliminarDelCarrito,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser usado dentro de un AppProvider");
  }
  return context;
};
