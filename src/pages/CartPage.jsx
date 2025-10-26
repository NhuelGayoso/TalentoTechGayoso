import { useContext } from "react";
import { Button } from "../components/Button";
import { AppContext } from "../context/AppContext";

export const CartPage = () => {
  const { carrito, vaciarCarrito, total } = useContext(AppContext);

  return (
    <div className="bg-[#F2F2F2] mx-auto justify-center items-center  gap-5 p-5 animate-fade-up m-5 w-1/2 rounded-lg">
      <h2>Carrito de compras</h2>
      <hr className="w-full my-5 border-gray-400" />
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {carrito.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>${Number(product.price).toFixed(2)}</p>
            </div>
          ))}
          <p>Total: ${Number(total).toFixed(2)}</p>
          <Button onClick={vaciarCarrito} boton="Vaciar Carrito" />
        </>
      )}
    </div>
  );
};
