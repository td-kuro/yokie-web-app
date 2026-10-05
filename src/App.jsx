import BookingModal from './components/booking/BookingModal';
import CartDrawer from './components/cart/CartDrawer';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { BookingProvider } from './context/BookingProvider';
import { CartProvider } from './context/CartProvider';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <CartProvider>
      <BookingProvider>
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />

        <BookingModal />
        <CartDrawer />
      </BookingProvider>
    </CartProvider>
  );
}
