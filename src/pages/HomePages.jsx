import river from "/img/river.jpg";
import { Button } from "@/components/ui/button";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { ForCategories } from "../components/ForCategories";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import destacados from "../mock/destacados.json";
import { useState } from "react";
import { Hero } from "../components/Hero";

export const HomePages = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(destacados);
  }, []);

  return (
    <div className="animate-fade-up w-[80%] mx-auto">
      <div
        style={{ backgroundImage: `url(${river})` }}
        className="bg-cover bg-center h-100 flex justify-center items-center "
      >
        <Hero
          title="Equipate para la próxima aventura"
          subTitle="Explora nuestra amplia selección de equipos y ropa de pesca para que tu proximo viaje sea inolvidable."
        />
      </div>
      <FeaturedProduct products={products} />
      <ForCategories />
    </div>
  );
};
