import React, { useContext } from 'react'
import { useCart } from '../../Context/CartContext';
import './cart.css'

const CartItem = (props) => {

  const { id, name, price, img, quantity } = props.item;

  const cart = useCart();

  return (
    <div className='item-container'>
        <img src={require("../../components/products/" + img)} width={50}/>
        <h4>{name}</h4>
        <p>${price}</p>
        <input type="number" defaultValue={quantity} onChange={(e) =>{cart.updateQuantity(e, id)}} min='0' max='10'/>
        <button className='remove-btn' onClick={() => cart.removeFromCart(id)}>X</button>
    </div>
  )
}


//QUANTITY CHANGE
// (e) =>{cart.updateQuantity(e.target.value, id)}

export default CartItem