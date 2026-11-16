import BookingModal from './components/booking/BookingModal';
import CartDrawer from './components/cart/CartDrawer';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { BookingProvider } from './context/BookingProvider';
import { CartProvider } from './context/CartProvider';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import { currentPage } from './utils/links';

const PAGES = { home: HomePage, terms: TermsPage };

export default function App() {
  const Page = PAGES[currentPage] ?? HomePage;

  return (
    <CartProvider>
      <BookingProvider>
        <Header />
        <main>
          <Page />
        </main>
        <Footer />

        <BookingModal />
        <CartDrawer />
      </BookingProvider>
    </CartProvider>
  );
}
