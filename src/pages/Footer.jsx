import React from "react";
import './Footer.css'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 My Webshop. All rights reserved.</p>
        <div className="social-media">
          <a href ="www.leospegel.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer;