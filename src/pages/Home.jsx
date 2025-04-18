import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling



const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });

const images = Object.keys(imageModules).map((key) => ({
  name: key.split('/').pop(),
  src: imageModules[key].default,
}));

const Home = () => {
  return (
    <div className="home-container">
          <header className="home-header">
    <h1>Welcome to Luxury Collections</h1>
    <p>Your exclusive destination for luxury watches, eyewear, bags, and jewelry.</p>
  </header>  
          {/* Filter images to find bag.jpg */}
    {images
      .filter((img) => img.name === 'stockholm.jpg') // Match the name of your image
      .map((img) => (
        <img key={img.name} src={img.src} alt={img.name} className="home-image" />
      ))}


      

      <section className="home-features">
        <h2>Why Shop with Us?</h2>
        <div className="feature">
          <h3>Curated Luxury Selection</h3>
          <p>Our carefully selected collection showcases the best in luxury, offering iconic brands and exclusive pieces that stand the test of time.</p>
        </div>
        <div className="feature">
          <h3>Unmatched Quality</h3>
          <p>We only offer products made from the finest materials, ensuring both beauty and durability for your most treasured possessions.</p>
        </div>
        <div className="feature">
          <h3>Exceptional Service</h3>
          <p>Our dedicated customer service team is here to guide you through your luxury shopping experience, ensuring satisfaction with every purchase.</p>
        </div>
      </section>

      <section className="home-contact">
  <div className="image-row">
    {images
      .filter((img) =>
        [  'bag.jpg','klockor.jpg', 'glas.jpg', 'flerklockor.jpg'].includes(img.name)
      )
      .map((img) => (
        <img key={img.name} src={img.src} alt={img.name} className="home-image" />
      ))}
  </div>

        <h2>Contact Us</h2>
        <p>Have any questions or need assistance finding the perfect luxury piece? Our team is ready to help. Reach out to us for personalized advice and exclusive offers.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
