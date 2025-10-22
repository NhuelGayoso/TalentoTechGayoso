import { Link } from "react-router-dom"
import { Button } from "./Button"


export const ForCategories = () => {
  return (
    <div className="">
        <div className="bg-[#F2F2F2] m-10 rounded-lg p-5">
        <h2>Para Categorias</h2>
      <div className="grid grid-cols-6 gap-10">
        <div className="flex flex-col p-5 bg-white rounded-lg border">
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex flex-col">
            <h2>Combos Cania y Reel Pro Angler</h2>
            <p>Combos de alto rendimiento para pescadores serios</p>
            <Link to="/listproduct">
              <Button boton="Ver Producto" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
