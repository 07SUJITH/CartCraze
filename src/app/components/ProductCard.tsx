import { Link } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

import { useCart } from '../contexts/CartContext';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col h-full">
      <CardContent className="flex-1 p-4 space-y-4">
        <Link to={`/product/${product.id}`} className="block">
          <div className="relative aspect-square mb-2 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </Link>
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <Link to={`/product/${product.id}`} className="group">
              <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
            </Link>
            <Badge variant="secondary" className="shrink-0">
              In-Stock
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <div className="flex items-center justify-between w-full gap-4">
          <p className="text-xl font-bold text-primary">
            ₹{product.price.toFixed(2)}
          </p>
          <Button
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
              })
            }
            className="shrink-0 bg-yellow-300 hover:bg-yellow-400 rounded-2xl transform active:scale-95 transition-transform duration-150"
          >
            Add to cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
