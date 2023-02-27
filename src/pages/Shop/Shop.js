import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Products from '../../components/products/Products'
import { products } from '../../data/ProductInfo'

const Shop = () => {

    const [ results, setResults ] = useState(products);

    const handleFilters = (keyword) => {
      switch(keyword){
        case "All":
          setResults(products);
          break;
        case "Fender":
          setResults(products.filter(product => {
                return product.make == "Fender";
              }))
          console.log(results);
          break;
        case "Gibson":
          setResults(products.filter(product => {
              return product.make == "Gibson";
            }))
          break;
          case "Electric":
          setResults(products.filter(product => {
            return product.category == 'Electric Guitars';
          }))
          break;
        case "Acoustic":
          setResults(products.filter(product => {
            return product.category == 'Acoustic Guitars';
          }))
          break;
          case "Extras":
            setResults(products.filter(product => {
              return product.category == 'Extras';
            }))
            break;
        default:
          setResults(products);
      }
    }

    const headerText = "#stayhome";
    const subHeader = "Save more with coupons & up to 70% off!";
    const NewArrivals = {
      title: "New Arrivals",
      subtitle: "New Gear, Same Vintage Sound"
    }



  return (
    <>
        <Header headerText={headerText} subHeader={subHeader}/>
        <div className='filters'>
          <button onClick={() => handleFilters('All')}>All Products</button>
          <button onClick={() => handleFilters('Electric')}>Electric</button>
          <button onClick={() => handleFilters('Acoustic')}>Acoustic</button>
          <button onClick={() => handleFilters('Fender')}>Fender</button>
          <button onClick={() => handleFilters('Gibson')}>Gibson</button>
          <button onClick={() => handleFilters('Extras')}>Extras</button>
        </div>
        <Products title={NewArrivals} results={results}/>
    </>
  )
}

export default Shop