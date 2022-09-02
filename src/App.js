import React, { useState, useEffect, useContext } from "react";
import ProductsContext from "./context/ProductsProvider";
import data from './data.json'
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import './App.css'
const App = () => {


  const { setProducts, products } = useContext(ProductsContext)

  useEffect(() => {

    data.data?.forEach(item => {

      item?.productList.forEach((item) => {
        item.count = 1
        item.id = Math.floor(Math.random() * 100)
      }

      )
    })
    setProducts(data.data)


  }, [])



  return (
    <div className="Container-App">
      <h1>assignment-open-book</h1>
      <div className="App">
        <ProductsList />
        <Cart />

      </div>

    </div>
  );
}

export default App;
