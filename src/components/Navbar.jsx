import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-center gap-4">
      <Link to="/">Inicio</Link>
      <Link to="/listproduct">Productos</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  );
};
