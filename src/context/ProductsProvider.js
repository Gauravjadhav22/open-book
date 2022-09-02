import React, { createContext, useState } from 'react'
import data from "../data.json"

const ProductsContext = createContext([])



export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (item) => {

        console.log(item, "added to cart");
        if (cart.length < 1) {
            setCart([item])
            return
        }
        for (let index = 0; index < cart.length; index++) {
            const product = cart[index];
            if (product.id === item.id) {

                // cart.map(element => {
                //     if (item.id === element.id) {
                //         element.count = product.count + 1;
                //     }
                //     return

                // })
                item.count = product.count + 1;
                var foundIndex = cart.findIndex(x => x.id == item.id);
                let items = [...cart]
                let newitem = items[foundIndex]
                newitem.count = product.count + 1 - 1;
                items[foundIndex] = newitem
                setCart([...items])



                return
            }


        }


        setCart([...cart, item])


    }

    const removeFromCart = (item) => {
        console.log(item, "removed from cart");

        if (item.count > 1) {
            item.count = item.count - 1;
        }
        if (cart.length <= 1) {
            window.location.reload()
            return
        }
        setCart(
            cart.filter(product => product.id !== item.id)

        )



    }





    return (

        <ProductsContext.Provider value={{ products, setProducts, cart, setCart, removeFromCart: removeFromCart, addToCart: addToCart }}>
            {children}
        </ProductsContext.Provider>
    )


}

export default ProductsContext;