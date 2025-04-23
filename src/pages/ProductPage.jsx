import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductPage.css';

const ProductPage = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const categories = [
      'Mens-watches',
      'Womens-watches',
      'Womens-bags',
      'Womens-jewellery',
      'Sunglasses',
    ];

    Promise.all(
      categories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then(res => res.json())
          .then(data => ({ category: cat, products: data.products }))
      )
      
    ).then((results) => {
      const grouped = {};
      results.forEach(({ category, products }) => {
        grouped[category] = products;
      });
      setProductsByCategory(grouped);

    }).catch((error) => {
      console.error('Error fetching products:', error);
      
    });
  }, []);
 
  if (Object.keys(productsByCategory).length === 0) {
    return (
      <div className="loader">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    );
  }


  return (
    
    <div className="product-page">


      {/* Category Buttons */}
      <div className="category-buttons">
        {Object.keys(productsByCategory).map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category.replace('-', ' ')}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? 'active' : ''}
        >
          Show all
        </button>
      </div>

      <div className="product-categories">
        {Object.entries(productsByCategory)
          .filter(([category]) => !selectedCategory || selectedCategory === category)
          .map(([category, products]) => (
            <div className='product-main-grid' key={category}>
              <h2 style={{ textTransform: 'capitalize' }}>{category.replace('-', ' ')}</h2>
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
                    <button
                      className='addButton'
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
