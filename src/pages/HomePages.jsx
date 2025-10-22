import river from "/img/river.jpg";
import { Button } from "../components/Button";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { ForCategories } from "../components/ForCategories";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import destacados from "../mock/destacados.json";
import { useState } from "react";

export const HomePages = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    setProducts(destacados);
  }, []);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${river})`, opacity: 0.9 }}
        className="bg-cover bg-center h-100 flex justify-center items-center "
      >
        <div className="flex flex-col justify-center items-center h-full w-100 text-center">
          <h1 className="text-4xl font-bold text-[#FF8C00]">
            Equipate para la próxima aventura
          </h1>
          <p className="text-white">
            Explora nuestra amplia selección de equipos y ropa de pesca para que
            tu proximo viaje sea inolvidable.
          </p>
          <Link to="/listproduct">
            <Button boton="Ver Productos" />
          </Link>
        </div>
      </div>
      <FeaturedProduct products={products}/>
      <ForCategories />
    </div>
  );
};
