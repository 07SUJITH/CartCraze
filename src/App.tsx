import { Route, Routes } from 'react-router-dom';

import AboutUs from './app/aboutus/page';
import CartPage from './app/cart/page';
import CategoryGroup from './app/categories/page';
import CategoryPage from './app/category/page';
import CheckoutPage from './app/checkout/page';
import Footer from './app/components/Footer';
import Header from './app/components/Header';
import MobileBottomNav from './app/components/MobileBottomNav';
import WhatsAppButton from './app/components/WhatsAppButton';
import { CartProvider } from './app/contexts/CartContext';
import OfferPage from './app/offers/page';
import HomePage from './app/page';
import ProductPage from './app/product/page';
import SearchResultsPage from './app/search/page';

function App() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <Header />

        <main className="flex-grow min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="*"
              element={
                <div className="container mx-auto px-4 py-6">
                  <Routes>
                    <Route path="/category/:slug" element={<CategoryPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/search" element={<SearchResultsPage />} />
                    <Route path="/categories" element={<CategoryGroup />} />
                    <Route path="/offers" element={<OfferPage />} />
                    <Route path="/about" element={<AboutUs />} />
                  </Routes>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileBottomNav />
      </div>
    </CartProvider>
  );
}

export default App;
