import { Link, useParams, useLocation } from "react-router-dom";
import { Button } from "../components/Button";

export const DetailProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div>
        <h1>Producto no encontrado</h1>
        <Link to="/listproduct">Volver a la lista de productos</Link>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col max-w-4xl mx-auto bg-gray-400 shadow-lg rounded-lg overflow-hidden m-5 text-black"
      key={id}
    >
      <div className="flex flex-col lg:flex-row items-center  ">
        <div className="md:w-1/2 p-5 relative">
          <div className=" ">
            <img
              src={product.img}
              alt={product.modelo}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="md:w-1/2 p-6">
          <h1 className="text-2xl font-bold text-black mb-2">
            {product.modelo}
          </h1>
          <p className="text-sm text-black mb-4">{product.descripcion}</p>

          <ul className="text-sm text-black mb-6">
            <li className="flex items-center mb-1">
              <svg
                className="w-4 h-4 mr-2 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {product.marca}
            </li>
            <li className="flex items-center mb-1">
              <svg
                className="w-4 h-4 mr-2 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {product.tipo}
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {product.longitud}
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {product.grafito}
            </li>
          </ul>

          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-3xl font-bold text-gray-900">
                ${product.precio}
              </span>
            </div>
          </div>

          <p className="text-green-600 text-sm font-extrabold mb-4">En Stock</p>

          <div className="flex space-x-4">
            <Button boton="Comprar"></Button>
            <Button boton="Agregar al carrito"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
