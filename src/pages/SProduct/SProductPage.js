import React from 'react'
import Products from "../../components/Products"
import SProduct from './SProduct'
import { products } from '../../Utilities/ProductInfo'

const SProductPage = () => {

  const SimProducts = {
    title: "Similar Products",
    subtitle: "You May Also Be Interested In:"
  }

  const results = products.slice(0, 4);

  return (
    <>
      <SProduct />
      <Products title={SimProducts} results={results}/>
    </>
  )
}

export default SProductPage