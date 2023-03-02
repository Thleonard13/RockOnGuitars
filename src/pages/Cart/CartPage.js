import React, { useContext } from 'react'
import { useCart } from '../../Context/CartContext';
import CartList from './CartList';
import './cart.css'

const CartPage = () => {

  const cartInventory = useCart().cartInventory;

  return (
    <>
      <section id='cart' className='section-p1'>
        <h1>Your Cart</h1>
        {cartInventory.length < 1 ? 
          <h4>There are currently no items in your cart ¯\_(ツ)_/¯</h4> :
        <>
          <div className='cart-header'>
            <h4>Product</h4>
            <h4></h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4></h4>
          </div>
          <CartList />
          <h4 className='total'>Total: ${cartInventory.reduce((acc, current) => acc + current.price, 0) }</h4>
        </>}
        <div className="buttons">
        <a href='/'>
          <button className='cart-btn'>Continue Shopping</button>
        </a>
        <button className='cart-btn' onClick={() =>{alert("Thanks for checking out the site. There is no actual checkout feature :)")}}>Check Out</button>
        </div>
      </section>
    </>
  )
}

export default CartPage