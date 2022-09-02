import React, { useContext } from 'react'
import ProductsContext from '../context/ProductsProvider'
import data from '../data.json'
import "./ProductsList.css"
import { BsCartPlus } from 'react-icons/bs'





const HouseHold = ({ products }) => {
    const { addToCart } = useContext(ProductsContext)
    return (<>
        <div >{products[0]?.name}</div>
        <div className='Household'>
            {products?.map((product) => product?.productList?.map(product => {
                return <div className='Household-Products' key={product.id}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <div>{product.id }</div>
                    <button onClick={() => addToCart(product)} className='AddToCart' style={{ width: "fit-content", backgroundColor: "" }}>Add To Cart <BsCartPlus /></button>

                </div>
            }))}
        </div></>
    )

}
const Cosmetics = ({ products }) => {
    const { addToCart } = useContext(ProductsContext)
    return (
        <>
            <div >{products[0]?.name}</div>
            <div className='Cosmetics' >
                {products?.map((product) => product?.productList?.map(product => {
                    return <div className='Cosmetics-Products' key={product.id}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>{product.id}</div>
                        <button onClick={() => addToCart(product)} className='AddToCart' style={{ width: "fit-content", backgroundColor: "" }}>Add To Cart <BsCartPlus /></button>

                    </div>
                }))}
            </div>
        </>
    )


}

const ProductsList = () => {
    const { products, addToCart } = useContext(ProductsContext)

    // let products = data.data
    return (

        <div >

            <Cosmetics products={products.filter(item => item.name === 'Cosmetics')} />
            <hr style={{ height: "5px", backgroundColor: "blue", width: "100%", marginTop: "15px", marginBottom: "15px" }} />
            <HouseHold className='Household' products={products.filter(item => item.name === 'Household')} />


        </div>
    )
}

export default ProductsList