import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import fishing from "../mock/Fishing.json";

export const ListProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
  });

  useEffect(() => {
    setProducts(fishing);
  }, []);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return filters.category == "all" || product.category === filters.category;
    });
  };

  const handleOptionChange = (e) => {
    setFilters({
      ...filters,
      category: e.target.value,
    });
  };

  return (
    <div className="flex flex-col  p-10 animate-fade-up gap-2">
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl font-bold text-white">Productos</h2>
        <div className="flex items-center gap-2">
          <label htmlFor="category" className="text-white">
            Categorias
          </label>
          <select
            name=""
            id="category"
            onChange={handleOptionChange}
            className="rounded-lg border p-2 border-gray-400 text-white"
          >
            <option className="text-black" value="all">
              All
            </option>
            <option className="text-black" value="Reel">
              Reel
            </option>
            <option className="text-black" value="Caña">
              Caña
            </option>
            <option className="text-black" value="Anzuelo">
              Anzuelo
            </option>
            <option className="text-black" value="Bolso">
              Bolso
            </option>
            <option className="text-black" value="Caja">
              Caja
            </option>
            <option className="text-black" value="Cuchara">
              Cuchara
            </option>
            <option className="text-black" value="Nylon">
              Nylon
            </option>
            <option className="text-black" value="Señuelos">
              Señuelos
            </option>
            <option className="text-black" value="Cable">
              Cable
            </option>
            <option className="text-black" value="Indumentaria">
              Indumentaria
            </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {filterProducts(products).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
