import React, { useState, useEffect } from "react";
import "./ContentSection.css";

function Package() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://cimauae.avmdevs.com/wp-json/dokan/v1/stores/2/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="content-section">
      <div className="product-list">
        <h2>Products</h2>
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => handleProductClick(product)}
          >
            {product.name}
          </div>
        ))}
      </div>
      <div className="product-details">
        {selectedProduct ? (
          <div>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
          </div>
        ) : (
          <p>Select a product to see details.</p>
        )}
      </div>
    </div>
  );
}

export default Package;
