import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom';



const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });

const images = Object.keys(imageModules).map((key) => ({
  name: key.split('/').pop(),
  src: imageModules[key].default,
}));

const Home = () => {

const navigate = useNavigate();


  return (




    <div className="home-container">

          <header className="home-header">
             
          {images
      .filter((img) => img.name === 'logo2.png')
      .map((img) => (
        <img key={img.name} src={img.src} alt={img.name} className="logo-image" />
      ))}        
    <h1>Welcome to Luxury Collections</h1>
    <p>Your exclusive destination for luxury watches, eyewear, bags, and jewelry.</p>
  </header>  
         
    {images
      .filter((img) => img.name === 'stockholm.jpg')
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

  <h2>Our Mission</h2>
<p>We strive to bring the finest luxury pieces to those who value quality and craftsmanship. Whether you have questions or need help discovering the perfect item, our dedicated team is here to support you every step of the way.</p>
<button onClick={() => { navigate('/about'); setMenuOpen(false); }} className="nav-btn">Read More</button>


      </section>
    </div>
  );
};

export default Home;
