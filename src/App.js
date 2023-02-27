import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import ServicesPage from './pages/Services/ServicesPage';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import SProductPage from './pages/SProduct/SProductPage';
import CartPage from './pages/Cart/CartPage';
import { products } from './Utilities/ProductInfo';
import { Context } from './Context/Context';
import { useState } from 'react';
import CartModal from './components/CartModal';


function App() {

  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [cartInventory, setCartInventory] = useState([]);

  return (
    <>
      <Context.Provider value={{activeProduct, setActiveProduct, cartInventory, setCartInventory}}>
        <Navbar />
        <CartModal />
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
      </Context.Provider>
    </>
  );
}

export default App;
