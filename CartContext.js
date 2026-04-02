import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css";

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="cart-overlay" onClick={onClose} />}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart ({totalItems})</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>🛒</p>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>Rs. {item.price.toLocaleString()}</p>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>Rs. {totalPrice.toLocaleString()}</span>
              </div>
              <button className="cart-checkout">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;