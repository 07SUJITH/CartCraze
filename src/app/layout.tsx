import { ReactNode } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './contexts/CartContext';

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}

export default RootLayout;
