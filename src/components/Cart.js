import React, { useContext, useEffect } from 'react'
import ProductsContext from '../context/ProductsProvider'
import "./Cart.css"
import { GrCart } from "react-icons/gr"
import { BsCartDash } from 'react-icons/bs'


const Cart = () => {


    const {  cart, removeFromCart } = useContext(ProductsContext)

    console.log("cart items:", cart);
    return (
        <div>
            <h1 style={{ textAlign: "center", fontWeight: "500" }}>  Cart</h1>
            <div className='cart-icon'>

                <GrCart />
                <sup>   {cart?.length}</sup>
            </div>
            <div className='cart-Container'>
                {cart?.map((product) => {
                    return (
                        <div className='cart-item' key={product?.id}>
                            <div>
                                {product?.name}
                            </div>
                            <div>
                                {product?.price}
                            </div>
                            <div style={{display:"flex",alignItems:"center"}}>
                                Quantity:<h1> {product?.count}</h1>
                            </div>
                            <button onClick={() =>
                                removeFromCart(product)

                            } className='remove-from-cart'>Remove From Cart <BsCartDash /></button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart