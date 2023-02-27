import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import './sProduct.css'

const SProduct = () => {

    const {activeProduct, cartInventory, setCartInventory} = useContext(Context);

    var mainImg = document.getElementById("main-img")
    var smImg =document.getElementsByClassName('small-img');

    const toggleProductImg = (idx) => {
        mainImg.src = smImg[idx].src;
    }

    const addToCart = (item) => {
        setCartInventory(() => {
            return [...cartInventory, {quantity: 1, ...activeProduct}];
        })
        alert( item.name + " added to cart");
    }

    console.log(activeProduct);

  return (
    <section id="pro-details" className="section-p1">
        <div className="single-pro-image">
            <img src={require("../../" + activeProduct.img)} width="100%" id="main-img" alt='no image'/>
            <div className="small-img-group">
                {activeProduct.images && 
                <>
                {activeProduct.images[0] && 
                    <div className="small-img-col" onClick={() => toggleProductImg(0)}>
                        <img src={require("../../" + activeProduct.images[0])} className="small-img" width="100%"/>
                    </div>}
                {activeProduct.images[1] && 
                    <div className="small-img-col" onClick={() => toggleProductImg(1)}>
                        <img src={require("../../" + activeProduct.images[1])} className="small-img" width="100%"/>
                    </div>}
                {activeProduct.images[2] && 
                    <div className="small-img-col" onClick={() => toggleProductImg(2)}>
                        <img src={require("../../" + activeProduct.images[2])} className="small-img" width="100%"/>
                    </div>}
                {activeProduct.images[3] && 
                    <div className="small-img-col" onClick={() => toggleProductImg(3)}>
                        <img src={require("../../" + activeProduct.images[3])} className="small-img" width="100%"/>
                    </div>}
                </>}
            </div>
        </div>
        <div className="single-pro-details">
            <h6>{activeProduct.category}</h6>
            <h4>{activeProduct.name}</h4>
            <h2>${activeProduct.price}</h2>
            <input type="number"/>
            <button className="normal" onClick={() => {addToCart(activeProduct)}}>Add To Cart</button>
            <h4>Product Details</h4>
            <p>{activeProduct.description}</p>
        </div>

    </section>
  )
}

export default SProduct