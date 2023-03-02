import React, { useContext, useState } from "react";
import { createContext } from "react";

const CartContext = createContext({});

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartInventory, setCartInventory] = useState([]);
    console.log(cartInventory);

    function addToCart(newItem){
      setCartInventory((currItems)=>{
        if (cartInventory.find(currItem => newItem.id === currItem.id) == null) {
          return [...currItems, {quantity: 1, ...newItem}];
        } else {
          return currItems.map(currItem => {
            if (currItem.id === newItem.id) {
              return {...currItem, quantity: currItem.quantity + 1}
            } else {
              return currItem;
            }
          }) 
        }
      })
        const modal = document.querySelector('.item-added');
        modal.classList.add('modal-active');
        setTimeout(() => (modal.classList.remove('modal-active')), 4000);
    }

      const removeFromCart =  key => {
        setCartInventory(cartInventory.filter(item => {
          return item.id !== key ;
        }));
      }

      const updateQuantity = (newQ, key) => {
        setCartInventory((currItems) =>{
          currItems.map((item) => {
            if (item.id === key){
                return {...item, quantity: newQ.target.value}
            } else {
              return item;
            }
          })
        })
    }

    return(
        <CartContext.Provider value={{
            cartInventory, 
            setCartInventory, 
            addToCart, 
            removeFromCart, 
            updateQuantity
          }}>
            {children}
        </CartContext.Provider>
    )
}