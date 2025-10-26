import { Button } from "./Button";
import { Link } from "react-router-dom";

export const FeaturedProduct = ({ products }) => {
  return (
    <div className="bg-[#F2F2F2] m-10 rounded-lg p-5">
      <h2 className="text-2xl font-bold">Productos Destacados</h2>
      <div className="grid lg:grid-cols-3 gap-10">
        {products?.map((product) => (
          <div className="flex flex-col p-5 bg-white rounded-lg border-gray-400 border">
            <div>
              <img src={product.img} alt="" className="rounded-lg  object-cover h-[250px] w-full" />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-lg">{product.description}</p>
              <Link to="/listproduct" className="mt-5">
                <Button boton="Ver Productos" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
