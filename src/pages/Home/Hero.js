import React from 'react'
import { Link } from 'react-router-dom'
import "./hero.css"

const Hero = () => {
  return (
    <section className='hero-container'>
      <div id='hero'>
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <Link to="/shop"><button>Shop Now</button></Link>
      </div>
    </section>
  )
}

export default Hero