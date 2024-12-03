// src/componentes/ProductCard.js

import React from 'react';
import { useCart } from '../texto/cartTexto';  

const ProductCard = ({ imgSrc, title, price, discount, noCartIcon, id }) => {
  const { addToCart } = useCart();  

  
  const handleAddToCart = () => {
    const product = { id, title, price, imgSrc, discount }; 
    addToCart(product);  
  };

  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>

      
      {price && <p>{price}</p>}

      
      {discount && <span className="discount-badge">{discount}</span>}

     
      {!noCartIcon && (
        <button 
          className="add-to-cart" 
          onClick={handleAddToCart} 
          aria-label="Agregar al carrito"
        >
          <i className="fas fa-shopping-cart"></i> Agregar al carrito
        </button>
      )}
    </div>
  );
};

export default ProductCard;













