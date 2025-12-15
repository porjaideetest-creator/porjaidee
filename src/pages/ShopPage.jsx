import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import './ShopPage.css';

export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Example Text', price: '$25', description: 'Example Text' },
    { id: 2, name: 'Example Text', price: '$35', description: 'Example Text' },
    { id: 3, name: 'Example Text', price: '$50', description: 'Example Text' },
    { id: 4, name: 'Example Text', price: '$20', description: 'Example Text' },
    { id: 5, name: 'Example Text', price: '$45', description: 'Example Text' },
    { id: 6, name: 'Example Text', price: '$15', description: 'Example Text' },
    { id: 7, name: 'Example Text', price: '$100', description: 'Example Text' },
    { id: 8, name: 'Example Text', price: '$200', description: 'Example Text' },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="shop-page" data-name="Desktop - 6" data-node-id="8:111">
      <Navbar />

      <div className="shop-grid">
        {products.map((product, index) => {
          const positions = [
            { left: '182px', top: '253px' },
            { left: '461px', top: '253px' },
            { left: '740px', top: '253px' },
            { left: '1019px', top: '253px' },
            { left: '182px', top: '652px' },
            { left: '461px', top: '652px' },
            { left: '740px', top: '652px' },
            { left: '1019px', top: '652px' },
          ];
          return (
            <div 
              key={product.id} 
              className="product-card" 
              style={positions[index]}
              data-node-id={`20:${2838 + index}`}
              onClick={() => handleProductClick(product)}
            >
              <div className="product-image">
                <div className="product-image-placeholder" />
                <div className="product-overlay">
                  <button 
                    className="add-to-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="product-body">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProduct && (
        <div className="product-modal" onClick={closeProductModal}>
          <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProductModal}>×</button>
            <h2>{selectedProduct.name}</h2>
            <p className="modal-price">{selectedProduct.price}</p>
            <p className="modal-description">{selectedProduct.description}</p>
            <button 
              className="modal-add-cart"
              onClick={() => {
                handleAddToCart(selectedProduct);
                closeProductModal();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
