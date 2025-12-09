import { useContext, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { AvatarImg } from "./avatar/Avatar";
import { CarritoContext } from "../context/CarritoContext";

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { productLength } = useContext(CarritoContext);

  const inputRef = useRef(null);
  const query = searchParams.get("query") || "";

  const handleSearch = (e) => {
    if (e.key === "Enter") return;
    const query = inputRef.current?.value;

    const newSearchParams = new URLSearchParams();
    if (!query) {
      newSearchParams.delete("query");
    } else {
      newSearchParams.set("query", inputRef.current.value);
    }

    setSearchParams(newSearchParams);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 pb-5 md:pb-0">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="flex flex-col md:flex-row h-16 items-center justify-between">
          {/* Logo */}
          <Logo />
          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`
              )}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`
              )}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/listproduct"
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`
              )}
            >
              Productos
            </Link>
            <Link
              to="/contact"
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`
              )}
            >
              Contacto
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  placeholder="Buscar productos..."
                  className="pl-9 w-64 h-9 bg-white"
                  onKeyDown={handleSearch}
                  defaultValue={query}
                />
              </div>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            {/* Iniciar sesion */}
            <Link to="/auth/login">
              <AvatarImg />
            </Link>
            {/* Carrito */}
            <Link to="/cart">
              <Button size="sm" className="ml-2">
                <ShoppingCart />
                <Badge>{productLength}</Badge>
              </Button>
            </Link>
            {/* Admin */}
            <Link to="/admin">
              <Button variant="destructive" size="sm" className="ml-2">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
