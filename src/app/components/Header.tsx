import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu, Phone, ShoppingCart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

import { useCart } from '../contexts/CartContext';
import SearchBar from './SearchBar';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartPopupRef = useRef<HTMLDivElement>(null);
  const cartButtonRef = useRef<HTMLButtonElement>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Offers', href: '/offers' },
    { name: 'About Us', href: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTransparent(scrollPosition < 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartPopupRef.current &&
        !cartPopupRef.current.contains(event.target as Node) &&
        cartButtonRef.current &&
        !cartButtonRef.current.contains(event.target as Node)
      ) {
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
    <header
      className={`sticky top-0 z-50   ${
        isTransparent ? 'bg-transparent' : 'bg-white text-[#004D40] shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center gap-4">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 " />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className={`w-[300px] p-0 ${
                  isTransparent
                    ? 'bg-[#6fc74f] text-white'
                    : 'bg-white text-[#004D40]'
                }`}
              >
                <SheetHeader className="p-4 border-b border-white/10">
                  <img
                    src="/logo.png"
                    alt="Restaurant Logo"
                    width={50}
                    height={90}
                    className="h-20 w-20"
                  />
                </SheetHeader>
                <DialogTitle asChild>
                  <VisuallyHidden>
                    <h2>Mobile Menu</h2>
                  </VisuallyHidden>
                </DialogTitle>
                <DialogDescription asChild>
                  <VisuallyHidden>
                    <p>Navigation menu for mobile users</p>
                  </VisuallyHidden>
                </DialogDescription>
                <div className="flex flex-col py-4 ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 hover:bg-white/10 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <Link to="/" className="flex md:w-full  items-center mx-auto">
              <img
                src="/logo.png"
                alt="Restaurant Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium hover:text-orange-400 transition-colors duration-200 ${
                  isActive(item.href) ? 'border-b-2 border-orange-400' : ''
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
              <Button
                ref={cartButtonRef}
                variant="ghost"
                size="icon"
                className="relative"
                onClick={handleCartClick}
                onMouseEnter={() => setShowCartPopup(true)}
              >
                <ShoppingCart className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>

              {showCartPopup && (
                <div
                  ref={cartPopupRef}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-xl  shadow-lg overflow-hidden z-50 transition-all duration-300 ease-in-out"
                  onMouseLeave={() => setShowCartPopup(false)}
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Cart Items
                    </h3>
                    {cart.length === 0 ? (
                      <p className="text-gray-600">Your cart is empty</p>
                    ) : (
                      <div className="max-h-48 overflow-y-auto">
                        {cart.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-2 mb-2"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-10 h-10 object-cover rounded"
                            />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-800 truncate">
                                {item.title}
                              </p>
                              <p className="text-xs text-gray-600">
                                {item.quantity} x ₹{item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 space-y-2">
                      <Button
                        onClick={() => navigate('/cart')}
                        className="w-full bg-[#004D40] hover:bg-[#00695C] text-white transition-colors duration-200"
                      >
                        View Cart
                      </Button>
                      <Button
                        onClick={() => {
                          if (cart.length === 0) {
                            // Assuming you have a toast function to show messages
                            toast.error('Cart is empty');
                          } else {
                            navigate('/checkout');
                          }
                        }}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200"
                      >
                        Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="tel:+1234567890"
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                isTransparent
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'bg-[#004D40] hover:bg-[#00695C] text-white'
              }`}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
        <div className="md:hidden py-3 flex  justify-center ">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
