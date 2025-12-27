import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();
  const { language, toggleLanguage } = useLanguage();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <>
      <div className="navbar" data-name="Navbar" data-node-id="8:9">
        <div className="navbar-logo" data-name="IMG_4785 1" data-node-id="6:5">
          <Link to="/">
            <img alt="" src="/images/logo.png" />
          </Link>
        </div>
        <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} style={{ left: '281px' }} data-node-id="8:3">
          About Us
        </Link>
        <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} style={{ left: '423px' }} data-node-id="8:4">
          Services
        </Link>
        <Link to="/get-involved" className={`nav-link ${isActive('/get-involved') ? 'active' : ''}`} style={{ left: '558px' }} data-node-id="8:5">
          Get Involved
        </Link>
        <Link to="/impact" className={`nav-link ${isActive('/impact') ? 'active' : ''}`} style={{ left: '731px' }} data-node-id="8:44">
          Our Impact
        </Link>
        <Link to="/shop" className={`nav-link ${isActive('/shop') ? 'active' : ''}`} style={{ left: '894px' }} data-node-id="8:6">
          Shop
        </Link>
      </div>
      <button 
        className="language-switcher"
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        {language === 'en' ? (
          <>
            <span className="flag">🇹🇭</span>
            <span>TH</span>
          </>
        ) : (
          <>
            <span className="flag">🇺🇸</span>
            <span>EN</span>
          </>
        )}
      </button>
      {cartItemCount > 0 && (
        <Link to="/cart" className="cart-button-link">
          <div className="cart-button">
            Cart ({cartItemCount})
          </div>
        </Link>
      )}
    </>
  );
}
