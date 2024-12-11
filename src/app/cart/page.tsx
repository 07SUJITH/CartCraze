import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

import { useCart } from '../contexts/CartContext';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <Link to="/categories">
          <Button className="bg-[#004D40] hover:bg-[#00695C]">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 gap-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center border-b pb-4 mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <label className="mr-2">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-16 border rounded px-2 py-1"
                />
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFromCart(item.id)}
            >
              <Trash2 className="h-5 w-5 text-red-600" />
            </Button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <p className="text-xl font-semibold">Total: ₹{total.toFixed(2)}</p>
        <Link to="/checkout">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}
