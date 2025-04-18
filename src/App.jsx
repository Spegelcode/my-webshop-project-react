import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'; // Correctly import Home
import './App.css';  // Styles for App (if any)
import NavBar from './components/NavBar'; // Importing NavBar if needed
import Cart from './pages/Cart'; // Importing Cart page
import Checkout from './pages/Checkout'; // Importing Checkout page
import ProductPage from './pages/ProductPage'; // Importing ProductPage component
import ProductDetail from './pages/ProductDetail'; // Importing ProductDetail component
import Footer from './pages/Footer'; // Importing Footer component
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <NavBar />  {/* Add NavBar here if you want it visible across all pages */}
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/shop" element={<ProductPage />} />
  <Route path="/product/:id" element={<ProductDetail />} />  {/* 👈 only keep this one */}
  <Route path="/about" element={<About />} />
</Routes>
<Footer /> {/* Add Footer here if you want it visible across all pages */}
    </div>
  );
}

export default App;
