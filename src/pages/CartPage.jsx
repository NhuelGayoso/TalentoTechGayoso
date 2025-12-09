import { useContext } from "react";
import { Hero } from "../components/Hero";
import { CarritoContext } from "../context/CarritoContext";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { X } from "lucide-react";

export const CartPage = () => {
  const { carrito, vaciarCarrito, eliminarProducto, total } =
    useContext(CarritoContext);
  return (
    <div className="w-[90%] max-w-6xl mx-auto py-8 animate-fade-up">
      <Hero title="Carrito de compras" />

      {carrito.length > 0 ? (
        <div className="mt-8 border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">Producto</TableHead>
                <TableHead className="text-right">Precio</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {carrito.map((producto, index) => (
                <TableRow key={index} className="hover:bg-accent/50">
                  <TableCell className="font-medium py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={producto.img}
                        alt={producto.nombre}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{producto.nombre}</p>
                        <p className="text-sm text-muted-foreground">
                          {producto.categoria}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ${producto.precio}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive/90"
                      onClick={() => eliminarProducto(producto)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Eliminar</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className="bg-accent/50">
              <TableRow>
                <TableCell colSpan={2} className="text-lg font-semibold">
                  Total
                </TableCell>
                <TableCell className="text-right text-lg font-semibold">
                  {total}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>

          <div className="p-4 border-t flex justify-between items-center">
            <Button
              variant="outline"
              onClick={vaciarCarrito}
              className="border-destructive text-destructive hover:bg-destructive/10"
            >
              Vaciar Carrito
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Proceder al pago
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 space-y-4">
          <p className="text-lg text-muted-foreground">Tu carrito está vacío</p>
          <Button asChild>
            <a href="/listproduct">Seguir comprando</a>
          </Button>
        </div>
      )}
    </div>
  );
};
