import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css'; // Assuming you have a CSS file for styling

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
<div className="product-page">
  <h1>Product Page</h1>
  <div className="product-grid">
    {products.map((product) => (
      <div
        key={product.id}
        className="product-card"
        onClick={() => navigate(`/product/${product.id}`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate(`/product/${product.id}`)}
      >
        <img src={product.thumbnail} alt={product.title} width="150" />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    ))}
  </div>
</div>


  );
};

export default ProductPage;
