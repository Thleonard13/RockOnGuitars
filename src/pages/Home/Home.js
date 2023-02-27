import React from 'react'

import Hero from './Hero';
import Products from '../../components/products/Products'
import Services from "../../components/Services/Services"
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import { products } from '../../data/ProductInfo'

const Home = () => {
  const newArrivals = {
    title: "New Arrivals",
    subtitle: "New Gear, Same Vintage Sound"
  }

  const topSellers = {
    title: "Top Sellers",
    subtitle: "Our Best Sellers for a Good Reason"
  }

  const acousticModels = products.filter(product => {
    return product.category === "Acoustic Guitars";
  })

  return (
    <>
      <Hero />
      <Services />
      <Products title={topSellers} results={products}/>
      <Banner1 />
      <Products title={newArrivals} results={acousticModels}/>
      <Banner2 />
      <Banner3 />
    </>
  )
}

export default Home;