// src/componentes/CartPage.js

import React from 'react';
import { useCart } from '../texto/cartTexto';  
import '../css/Carrito.css';  
const CartPage = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart(); 

  const formatPrice = (price) => {
    const priceNumber = parseFloat(price.replace(/[^\d.-]/g, ''));

    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',  
    }).format(priceNumber);
  };

  return (
    <div className="cart-page">
      <h1>Productos en el Carrito</h1>
      
      
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img 
                src={product.imgSrc} 
                alt={product.title} 
                className="cart-item-image"  
              />
              <h2>{product.title}</h2>
              <p>{formatPrice(product.price)} x {product.quantity}</p> {/* Mostrar precio y cantidad */}
              <button onClick={() => removeFromCart(product.id)} className="remove-btn">
                Eliminar del Carrito
              </button>
            </div>
          ))}
        </div>
      )}

      
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: {formatPrice(getTotalPrice())}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;






