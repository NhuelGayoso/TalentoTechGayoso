import { Link, useParams, useLocation } from "react-router-dom";

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
    <>
      <h2>Detalles del producto {id}</h2>
      <ul>
        <li>Key: {product.id}</li>
        <li>Marca: {product.marca}</li>
        <li>Modelo: {product.modelo}</li>
        <li>Precio: {product.precio}</li>
        <li>Stock: {product.stock}</li>
        <li>Descripcion: {product.descripcion}</li>
      </ul>
      <hr />
      <img src={product.img} alt={product.modelo} />
      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors">
        <Link to="/listproduct">Volver a la lista de productos</Link>
      </button>
    </>
  );
};
