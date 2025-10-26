
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="p-10 border-t border-gray-200">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-white">
            <Link to="/about">Sobre Nosotros</Link>
            <Link to="/contact">Contacto</Link>
            <Link>Politica de Privacidad</Link>
            <Link>Preguntas Frecuentes</Link>
            <Link>Terminos y Condiciones</Link>
        </div>
    </footer>
  )
}
