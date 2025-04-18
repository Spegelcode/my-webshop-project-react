import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'; 
import './App.css'; 
import NavBar from './components/NavBar'; 
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; 
import ProductPage from './pages/ProductPage'; 
import ProductDetail from './pages/ProductDetail'; 
import Footer from './pages/Footer'; 
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <NavBar />  
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/shop" element={<ProductPage />} />
  <Route path="/product/:id" element={<ProductDetail />} /> 
  <Route path="/about" element={<About />} />
</Routes>
    </div>
  );
}

export default App;
