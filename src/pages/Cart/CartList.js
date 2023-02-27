import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import CartItem from './CartItem';

const CartList = () => {

    const { cartInventory } = useContext(Context);

  return (
    <div className='cart-list'>
        {cartInventory.map(item => {
            return <CartItem key={item.id} item={item}/>
        })}
    </div>
  )
}

export default CartList