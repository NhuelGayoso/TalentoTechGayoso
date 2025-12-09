import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";

import { useEffect, useState } from "react";
import river from "/img/river.jpg";

export const ListProductPage = () => {
  const [products, setProducts] = useState([]);

  const mockApi = "https://693411364090fe3bf01ece22.mockapi.io/Productos";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(mockApi);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col p-10 animate-fade-up gap-10">
      <Hero title={"Todos los productos"} style={{ backgroundImage: `url(${river})`, opacity: 0.9 }}/>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
