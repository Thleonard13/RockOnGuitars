import React, { useContext } from 'react'
import { Context } from '../../Context/Context';
import CartList from './CartList';

const CartPage = () => {

  const {cartInventory} = useContext(Context);

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
        <button>Continue Shopping</button>
        <button>Check Out</button>
      </section>
    </>
  )
}

export default CartPage