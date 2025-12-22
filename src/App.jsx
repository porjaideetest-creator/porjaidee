import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { CartProvider } from './contexts/CartContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ImpactPage from './pages/ImpactPage';
import ShopPage from './pages/ShopPage';
import SupportPage from './pages/SupportPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';

function App() {
  // Get the base path from vite.config.js (should match the base in vite.config.js)
  // For GitHub Pages: /porjaidee/, For Vercel: /
  const basePath = import.meta.env.BASE_URL || '/';

  return (
    <CartProvider>
      <Router basename={basePath}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Analytics />
      </Router>
      <Analytics />
    </CartProvider>
  );
}

export default App;
