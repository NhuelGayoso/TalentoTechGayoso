import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { Button } from "../components/Button";



export const CartPage = () => {

  const {carrito, vaciarCarrito} = useContext(CarritoContext);

  return (
    <div className="bg-[#F2F2F2] mx-auto justify-center items-center  gap-5 p-5 animate-fade-up m-5 w-1/2 rounded-lg"> 
      <h1>Carrito</h1>
    <hr className='w-full my-5 border-gray-400'/>
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
