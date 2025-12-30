import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import './Navbar.css';

const translations = {
  en: {
    aboutUs: 'About Us',
    services: 'Services',
    getInvolved: 'Get Involved',
    ourImpact: 'Our Impact',
    shop: 'Shop',
    cart: 'Cart'
  },
  th: {
    aboutUs: 'เกี่ยวกับเรา',
    services: 'บริการของเรา',
    getInvolved: 'ร่วมเป็นส่วนหนึ่ง',
    ourImpact: 'ผลกระทบของเรา',
    shop: 'ร้านค้า',
    cart: 'ตะกร้า'
  }
};

export default function Navbar() {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  
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
          {t.aboutUs}
        </Link>
        <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} style={{ left: '423px' }} data-node-id="8:4">
          {t.services}
        </Link>
        <Link to="/get-involved" className={`nav-link ${isActive('/get-involved') ? 'active' : ''}`} style={{ left: '558px' }} data-node-id="8:5">
          {t.getInvolved}
        </Link>
        <Link to="/impact" className={`nav-link ${isActive('/impact') ? 'active' : ''}`} style={{ left: '731px' }} data-node-id="8:44">
          {t.ourImpact}
        </Link>
        <Link to="/shop" className={`nav-link ${isActive('/shop') ? 'active' : ''}`} style={{ left: '894px' }} data-node-id="8:6">
          {t.shop}
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
            {t.cart} ({cartItemCount})
          </div>
        </Link>
      )}
    </>
  );
}
