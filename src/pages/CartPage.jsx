import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { Button } from "../components/Button";



export const CartPage = () => {

  const {carrito, vaciarCarrito} = useContext(CarritoContext);

  return (
    <div className="bg-[#F2F2F2] m-auto flex flex-col p-10 animate-fade-up gap-2"> 
      <h1>Carrito</h1>
     <Button onClick={vaciarCarrito} boton="Vaciar Carrito"/>
      {carrito.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>  
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
