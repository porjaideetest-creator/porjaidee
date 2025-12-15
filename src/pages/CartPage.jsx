import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import './CartPage.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    // Simulate checkout process
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
    }, 3000);
  };

  if (cart.length === 0 && !checkoutSuccess) {
    return (
      <div className="cart-page" data-name="Cart Page">
        <Navbar />
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>Start shopping to add items to your cart!</p>
          <Link to="/shop" className="shop-link-button">
            Go to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="cart-page" data-name="Cart Page">
      <Navbar />
      
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>

        {checkoutSuccess ? (
          <div className="checkout-success">
            <h2>Thank you for your purchase!</h2>
            <p>Your order has been placed successfully.</p>
            <Link to="/shop" className="shop-link-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <div className="cart-item-placeholder" />
                  </div>
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-description">{item.description}</p>
                    <p className="cart-item-price">{item.price}</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity || 1}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="cart-item-total">
                    ${(parseFloat(item.price.replace('$', '')) * (item.quantity || 1)).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <button className="checkout-button" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
              <button className="clear-cart-button" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/shop" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

