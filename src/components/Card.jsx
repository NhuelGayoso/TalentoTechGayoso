import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useAppContext } from "../context/AppContext";

export const Card = ({ product }) => {
  const { agregarAlCarrito } = useAppContext();
  return (
    <div className=" bg-gray-400 items-center justify-center p-5 rounded-lg">
      <div className="h-[500px] w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
        <div className="relative">
          <img
            src={product.img}
            alt="Product"
            className="w-full h-52 object-contain"
          />
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {product.modelo}
            </h3>
            <p className="text-gray-500 mt-1">{product.categoria} </p>
            <p className="text-gray-500 mt-1">{product.marca} </p>
          </div>

          <div className="flex flex-col justify-between items-center">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">
                {" "}
                ${product.precio}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col items-center gap-2">
              <Link to={`/listproduct/${product.id}`} state={{ product }}>
                <Button boton="Mas Detalles"></Button>
              </Link>

              <Button
                boton="Agregar al carrito"
                onClick={() => agregarAlCarrito(product)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
