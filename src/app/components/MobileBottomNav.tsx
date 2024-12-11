'use client';

import { Home, LayoutGrid, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { useCart } from '../contexts/CartContext';

export default function MobileBottomNav() {
  const location = useLocation();
  const { cart } = useCart();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Categories', href: '/categories', icon: LayoutGrid },
    { name: 'Cart', href: '/cart', icon: ShoppingCart },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center py-2 ${
                isActive ? 'text-[#004D40]' : 'text-gray-500'
              }`}
            >
              <div className="relative">
                <Icon className="h-6 w-6" />
                {item.name === 'Cart' && cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
