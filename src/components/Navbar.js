import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png';
import './Navbar.css';

const Navbar = () => {

    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');


    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    }

  return (
    <>
        <section id="header">
            <Link to="/">
                <img src={Logo} id="logo"/>
            </Link>
            <div>
                <ul id="navbar">
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li> 
                    <li id="lg-bag"><Link to="/cart"><i className="fas fa-shopping-bag"></i></Link></li>
                    <Link to="#" id="close"><i className="fas fa-times"></i></Link>
                </ul>
            </div>
            <div id="mobile">
                <Link to="/cart"><i className="fas fa-shopping-bag"></i></Link>
                <i id="bar" className="fas fa-outdent"></i>
            </div>
        </section>
    </>
  )
}

export default Navbar