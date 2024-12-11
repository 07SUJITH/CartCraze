import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import SearchBar from './SearchBar';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartPopupRef = useRef(null);
  const cartButtonRef = useRef(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Offers', href: '/offers' },
    { name: 'About Us', href: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartPopupRef.current && !cartPopupRef.current.contains(event.target) &&
          cartButtonRef.current && !cartButtonRef.current.contains(event.target)) {
        setShowCartPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="bg-teal-800 text-white sticky top-0 z-50 transition-all duration-300 ease-in-out shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Restaurant Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium hover:text-yellow-300 transition-colors duration-200 ${
                  isActive(item.href) ? 'border-b-2 border-yellow-300' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block w-[300px]">
              <SearchBar />
            </div>

            <div className="relative">
              <button
                ref={cartButtonRef}
                className="relative text-white focus:outline-none"
                onClick={handleCartClick}
                onMouseEnter={() => setShowCartPopup(true)}
              >
                <ShoppingCart className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-teal-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>

              {showCartPopup && (
                <div
                  ref={cartPopupRef}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50 transition-all duration-300 ease-in-out"
                  onMouseLeave={() => setShowCartPopup(false)}
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Cart Items</h3>
                    {cart.length === 0 ? (
                      <p className="text-gray-600">Your cart is empty</p>
                    ) : (
                      <div className="max-h-48 overflow-y-auto">
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center gap-2 mb-2">
                            <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-teal-800 truncate">{item.title}</p>
                              <p className="text-xs text-gray-600">{item.quantity} x ₹{item.price.toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 space-y-2">
                      <button
                        onClick={() => navigate('/cart')}
                        className="w-full bg-teal-800 hover:bg-teal-700 text-white py-2 px-4 rounded transition-colors duration-200"
                      >
                        View Cart
                      </button>
                      <button
                        onClick={() => navigate('/checkout')}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-teal-800 py-2 px-4 rounded transition-colors duration-200"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="tel:+1234567890"
              className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-teal-800 px-4 py-2 rounded-md transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
        <div className="md:hidden py-3">
          <SearchBar />
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-teal-700">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-4 py-2 text-base font-medium text-white hover:bg-teal-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

