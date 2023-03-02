import React, { useContext } from 'react'
import { useCart } from '../../Context/CartContext';
import { useActiveProduct } from '../../Context/ActiveProductContext';
import './sProduct.css'

const SProduct = () => {

    const cart = useCart();

    const toggleProductImg = (idx) => {
        var mainImg = document.getElementById("main-img")
        var smImg =document.getElementsByClassName('small-img');
        mainImg.src = smImg[idx].src;
    }

    let activeProduct = useActiveProduct();   

  return (
    <section id="pro-details" className="section-p1">
        <div className="single-pro-image">
            <img src={require("../../components/products/" + activeProduct.img)} width="100%" id="main-img" alt='no image'/>
            <div className="small-img-group">
                {activeProduct.images && 
                <>
                {activeProduct.images[0] && 
                    <div className="small-img-col" onClick={() => toggleProductImg(0)}>
                        <img src={require("../../components/products/" + activeProduct.images[0])} className="small-img" width="100%"/>
                    </div>}
                {activeProduct.images[1] && 
                    <div className="small-img-col" onClick={() => toggleProductImg(1)}>
                        <img src={require("../../components/products/" + activeProduct.images[1])} className="small-img" width="100%"/>
                    </div>}
                {activeProduct.images[2] && 
                    <div className="small-img-col" onClick={() => toggleProductImg(2)}>
                        <img src={require("../../components/products/" + activeProduct.images[2])} className="small-img" width="100%"/>
                    </div>}
                {activeProduct.images[3] && 
                    <div className="small-img-col" onClick={() => toggleProductImg(3)}>
                        <img src={require("../../components/products/" + activeProduct.images[3])} className="small-img" width="100%"/>
                    </div>}
                </>}
            </div>
        </div>
        <div className="single-pro-details">
            <h6>{activeProduct.category}</h6>
            <h4>{activeProduct.name}</h4>
            <h2>${activeProduct.price}</h2>
            <button className="normal" onClick={()=> {cart.addToCart(activeProduct)}}>Add To Cart</button>
            <h4>Product Details</h4>
            <p>{activeProduct.description}</p>
        </div>

    </section>
  )
}

export default SProduct