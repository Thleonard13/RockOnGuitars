import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { useUpdateAP } from '../Context/ActiveProductContext';
import './products/products.css'

const ProductCard = (props) => {

  const cart = useCart();
  const updateAP = useUpdateAP();

  const { id, name, make, price, img, rating} = props.productInfo;

  const handleClick = () => {
    updateAP(props.productInfo);
    window.scrollTo(0, 0);
  }


  return (
    <div className="pro">
      <Link to="/product" onClick={() => handleClick()}>
        <div className='img-container'>
        <img src={require('./products/'+img)} alt="no image"/>
        </div>
        <div className="des">
            <span>{make}</span>
            <h5>{name}</h5>
            <div className="star">
                {[...Array(rating)].map(() => {
                  return <i key={Math.random(1, 100000)} className="fas fa-star"></i>
                })}
            </div>
            <h4>${price}</h4>
        </div>
      </Link>
      <i className="fas fa-shopping-cart cart" onClick={() => {cart.addToCart(props.productInfo)}}></i> 
    </div>

  )
}

export default ProductCard