import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css";

// This component fetches and displays the details of a specific product based on the product ID from the URL.
const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [product, setProduct] = useState(null); // State to hold the product details
  const { addToCart } = useCart(); // Access the addToCart function from the CartContext
// Fetch product details from the API when the component mounts or when the ID changes
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
// If the product is not yet loaded, show a loading spinner
  if (!product) return <div className="loader">
  <span className="bar"></span>
  <span className="bar"></span>
  <span className="bar"></span>
</div>;

  return (
    <div className="product-details">     
    
   
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
  <button onClick={() => addToCart(product)}>Add to Cart</button>
    
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Availability:</strong> {product.availabilityStatus}</p>
      <p><strong>Weight:</strong> {product.weight}g</p>

      <p><strong>Dimensions:</strong> 
        {product.dimensions?.width} cm 
        {product.dimensions?.height} cm 
        {product.dimensions?.depth} cm
      </p>

      <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
      <p><strong>Shipping:</strong> {product.shippingInformation}</p>
      <p><strong>Return Policy:</strong> {product.returnPolicy}</p>

      <p><strong>Tags:</strong> {product.tags?.join(", ")}</p>

      <div>
        <h3>Reviews</h3>
        {product.reviews?.map((review, index) => (
          <div key={index}className="product-reviews">
            <p><strong>{review.reviewerName}</strong> ({review.rating}/5)</p>
            <p>{review.comment}</p>
            <p><em>{new Date(review.date).toLocaleDateString()}</em></p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ProductDetails;
