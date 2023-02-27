import React from 'react'
import { products } from '../Utilities/ProductInfo'
import ProductCard from './ProductCard'
import "./Products.css"

const Products = (props) => {
  const { title, results } = props;



  return (
    <section id='product1' className='section-p1'>
      <h2>{title.title}</h2>
      <p>{title.subtitle}</p>
      <div className='pro-container'>
        {results.map((product) => (
            <ProductCard key={product.id} productInfo={product} />
        ))}
      </div>
    </section>
  )
}

export default Products