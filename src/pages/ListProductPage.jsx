import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import fishing from "../mock/Fishing.json";

export const ListProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(fishing);
  }, []);

  return (
    <div className="flex flex-col  p-10">
      <h2>Productos</h2>
      <div className="grid grid-cols-3 gap-10">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
