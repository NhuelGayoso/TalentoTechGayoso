import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CarouselImg } from "./Carrousel";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Card className="group border-0 rounded-lg shadow-lg overflow-hidden product-card-hover">
      <CardContent className="p-2">
        <div
          className="relative aspect-square overflow-hidden bg-muted rounded-lg"
          key={product.id}
        >
          <CarouselImg products={product.img} />
        </div>
        <Link to={`/listproduct/${product.id}`} state={{ product }}>
          <div className="pt-6 px-4 pb-4 space-y-3">
            <CardTitle>{product.nombre}</CardTitle>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase">
                {product.categoria}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">${product.precio}</p>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};
