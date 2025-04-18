import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">     
    
   
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
  <button onClick={() => addToCart(product)}>Add to Cart</button>

      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Discount:</strong> {product.discountPercentage}%</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Availability:</strong> {product.availabilityStatus}</p>
      <p><strong>Weight:</strong> {product.weight}g</p>

      <p><strong>Dimensions:</strong> 
        {product.dimensions?.width} x 
        {product.dimensions?.height} x 
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
