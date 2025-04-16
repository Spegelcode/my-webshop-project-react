import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Webshop</h1>
        <p>Your one-stop shop for amazing products at unbeatable prices.</p>
      </header>
      
      <section className="home-intro">
        <h2>About Us</h2>
        <p>At My Webshop, we offer a wide range of high-quality products across different categories, including electronics, fashion, home decor, and more. Our mission is to bring you top-notch products at prices you'll love.</p>
        <p>Whether you're looking for the latest gadgets, trendy clothing, or stylish furniture, you'll find it all here. We strive to provide excellent customer service and a seamless shopping experience.</p>
      </section>

      <section className="home-features">
        <h2>Why Shop with Us?</h2>
        <div className="feature">
          <h3>Great Selection</h3>
          <p>We carefully curate our collection to ensure you have access to the best products available online.</p>
        </div>
        <div className="feature">
          <h3>Competitive Prices</h3>
          <p>Our prices are some of the best in the market. Get the best value for your money!</p>
        </div>
        <div className="feature">
          <h3>Fast Shipping</h3>
          <p>Enjoy fast and reliable shipping, so you can get your products as quickly as possible.</p>
        </div>
      </section>

      <section className="home-contact">
        <h2>Contact Us</h2>
        <p>Have any questions or need help? Don't hesitate to reach out to us. Our customer service team is here to assist you!</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
