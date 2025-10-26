import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import categorias from "../mock/categorias.json";

export const ForCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categorias);
  }, []);

  return (
    <div className="">
      <div className="bg-[#F2F2F2] m-10 rounded-lg p-5">
        <h2 className="text-2xl font-bold">Por Categorias</h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
          {categories?.map((category) => (
            <div className="flex flex-col p-5 justify-center items-center bg-white rounded-lg border border-gray-400 ">
              <div>
                <img
                  src={category.img}
                  alt=""
                  className="object-contain h-[200px] "
                />
              </div>
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-xl font-bold">{category.name}</h2>
                <Link to="/listproduct">
                  <Button boton="Ver Mas" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
