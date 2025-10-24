import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Card = ({ product }) => {
  return (
    <div className=" bg-gray-400 flex items-center justify-center p-4 rounded-lg">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
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

            <Link to={`/listproduct/${product.id} state=${product}`}>
              <Button boton="Mas Detalles"></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
