import React, { useState } from "react";
import { useCart } from "./CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, price, type, image } = product;
  const isNew = type === "New";
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
        <span className={`badge ${isNew ? "badge-new" : "badge-thrift"}`}>
          {type}
        </span>
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Rs. {price.toLocaleString()}</p>
        <button
          className={`add-to-cart ${added ? "added" : ""}`}
          onClick={handleAddToCart}
        >
          {added ? "✓ Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;