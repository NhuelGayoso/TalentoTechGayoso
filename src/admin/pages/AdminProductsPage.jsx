import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { PlusIcon } from "lucide-react";


export const AdminProductsPage = () => {
  return (
    <>
    <div className="flex justify-between">

    {/* <AdminTitle title={"Productos"} subtitle={"Gestiona los productos de tu tienda"} /> */}
      <Link to={`/admin/products/new`}>
        <Button className="mb-4"> <PlusIcon/> Agregar Producto</Button>
      </Link>
    </div>

      <Table className="bg-white p-10 shadow-md rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>
              <img
                src="https://placehold.co/250x250"
                alt="Producto"
                className="w-20 h-20 object-cover"
              />
            </TableCell>
            <TableCell>Producto 1</TableCell>
            <TableCell>$250</TableCell>
            <TableCell>Categoria 1</TableCell>
            <TableCell>5</TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/products/1`}>
                <Button variant="success">Editar </Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* <CustomPagination totalPages={5} /> */}
    </>
  );
};
