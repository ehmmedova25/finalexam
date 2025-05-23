import React from 'react'
import Banner from './banner/Banner'
import ProductSchema from './productscema/ProductSchema'
import Card from './card/Card'
import Product from './product/Product'
import RelatedProducts from './relatedproducts/Related'

const Home = () => {
    return (
        <div>
            <Banner />
            <Card/>
            <Product/>
            <ProductSchema/> 
            <RelatedProducts/>
        </div>
    )
}

export default Home
