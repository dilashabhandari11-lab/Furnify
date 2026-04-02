import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products, typeFilter }) => {
  const filtered = products.filter(p => typeFilter ? p.type.toLowerCase() === typeFilter.toLowerCase() : true);

  return (
    <section>
      <h2>{title}</h2>
      <div className="product-grid">
        {filtered.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
};

export default ProductSection;