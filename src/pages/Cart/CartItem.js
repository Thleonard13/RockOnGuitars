import React, { useContext } from 'react'
import { Context } from '../../Context/Context';

const CartItem = (props) => {

  const { name, price, img, quantity } = props.item;

  const { cartInventory, setCartInventory } = useContext(Context)

  const removeItem = thisKey => {
    setCartInventory(cartInventory.filter(item => {
      return item.id !== thisKey;
    }));
    console.log(cartInventory);
  }

  const updateQuantity = (item) => {
    // item.quantity += 1;
    // console.log(item.quantity);
  }

  return (
    <div className='item-container'>
        <img src={require("../" + img)} width={50}/>
        <h4>{name}</h4>
        <p>${price}</p>
        <input type="number" value={quantity} min='0' max='10'onChange={() => updateQuantity(props.item)}/>
        <button onClick={() => removeItem(props.item.id)}>X</button>
    </div>
  )
}

export default CartItem