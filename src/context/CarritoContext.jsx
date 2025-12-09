import { useState,createContext } from "react";

//! Crear el contexto
export const CarritoContext = createContext();

//! Proveedor del contexto
export const CarritoProvider = ({children}) => {
  const [carrito,setCarrito] = useState([])

  const agregarAlCarrito =(producto)=>{
    setCarrito([...carrito,producto])
  }

  const vaciarCarrito = ()=>{
    setCarrito([])
  }

  const eliminarProducto = ()=>{
    
  }

  const productLength = carrito.length

  const total = carrito.reduce((acumulador,producto)=>{
    return acumulador + producto.precio
  },0)

  return(
    <CarritoContext.Provider value={{carrito,agregarAlCarrito,vaciarCarrito,productLength,eliminarProducto,total}}>
      {children}
    </CarritoContext.Provider>
  )
}
