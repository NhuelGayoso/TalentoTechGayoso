import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t py-12 px-4 lg:px-8 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 p-10 md:grid-cols-4 gap-5">
          <div>
            <Logo />
          </div>

          <div>
            <h4 className="font-medium mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Reel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Cañas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Devoluciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Pesca Shop. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
