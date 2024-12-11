'use client';

import { Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

import { useCart } from '../contexts/CartContext';

type AddToCartButtonProps = {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cart, product.id]);

  const handleAddToCart = () => {
    if (quantity === 0) {
      addToCart({
        ...product,
        quantity: 1,
      });
    } else {
      updateQuantity(product.id, quantity);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setQuantity(0);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border rounded-md">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setQuantity(Math.max(0, quantity - 1))}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-12 text-center">{quantity}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button
        onClick={handleAddToCart}
        className="bg-[#004D40] hover:bg-[#00695C]"
      >
        {quantity === 0 ? 'Add to cart' : 'Update cart'}
      </Button>
      {quantity > 0 && (
        <Button
          onClick={handleRemoveFromCart}
          className="bg-red-500 hover:bg-red-600"
        >
          Remove from cart
        </Button>
      )}
    </div>
  );
}
