import React from "react";
import "./About.css"; // Import your CSS file for styling


const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Luxury Collections</h1>
        <p>Discover the story behind our exclusive brand.</p>
      </header>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded with a passion for elegance and refinement, Luxury Collections was born to offer timeless accessories to those who appreciate the finer things in life. From hand-crafted watches to designer eyewear and jewelry, our collection is a tribute to quality and class.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To bring world-renowned luxury brands directly to our customers, with an unwavering focus on authenticity, quality, and service. We strive to provide an exceptional experience from the moment you land on our website to the day your luxury item arrives.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Authenticity:</strong> We source only genuine, certified luxury goods.</li>
          <li><strong>Excellence:</strong> We aim for excellence in every aspect, from product to service.</li>
          <li><strong>Elegance:</strong> Our collections are curated with taste and style.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;