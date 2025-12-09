import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const DetailProductPage = () => {
  const { state } = useLocation();
  const product = state?.product;
  const navigate = useNavigate();
  const { agregarAlCarrito } = useContext(CarritoContext);

  if (!product) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <Button onClick={() => navigate(-1)}>Volver atrás</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl animate-fade-up">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-96 w-full object-cover md:w-96"
              src={product.img[0]}
              alt={product.nombre}
            />
          </div>
          <div className="p-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.nombre}
              </h1>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  Descripción: {product.descripcion}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.descripcion}
                </p>
              </div>

              {product.caracteristicas && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Características:
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {product.caracteristicas.map((caracteristica, index) => (
                      <li key={index}>{caracteristica}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2">
                <p className="text-2xl font-bold text-primary">
                  ${product.precio}
                </p>
                {product.stock > 0 ? (
                  <p className="text-sm text-green-600 mt-1">
                    En stock - {product.stock} unidades disponibles
                  </p>
                ) : (
                  <p className="text-sm text-red-600 mt-1">Sin stock</p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <Button onClick={() => agregarAlCarrito(product)}>
                Añadir al carrito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
