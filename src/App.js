import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import ServicesPage from './pages/Services/ServicesPage';
import Contact from './pages/Contact/Contact';
import Footer from './components/footer/Footer';
import Newsletter from './components/newsletter/Newsletter';
import SProductPage from './pages/SProduct/SProductPage';
import CartPage from './pages/Cart/CartPage';
import { products } from './data/ProductInfo';
import { CartProvider } from './Context/CartContext';
import { ActiveProductProvider } from './Context/ActiveProductContext';
import { useState } from 'react';


function App() {

  return (
    <>
      <CartProvider>
        <ActiveProductProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product' element={<SProductPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Newsletter />
        <Footer />
        </ActiveProductProvider>
      </CartProvider>
    </>
  );
}

export default App;
