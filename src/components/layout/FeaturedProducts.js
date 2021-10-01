import React from 'react'
import ProductItem from './ProductItem'

const FeaturedProducts = () => {
    return (
        <div className="small-container">
            <h2 className="title">Featured Products</h2>
            <div className="row">
                <ProductItem title="Red Printed T-shirt" price="650.00" rating="5" img="/assets/img/product-1.jpg"/>
                <ProductItem title="Black Running Shoes" price="2,500.00" rating="5" img="/assets/img/product-2.jpg"/>
                <ProductItem title="Jogger Pants" price="350.00" rating="5" img="/assets/img/product-3.jpg"/>
                <ProductItem title="Navy Blue Polo Shirt" price="850.00" rating="5" img="/assets/img/product-4.jpg"/>
            </div>
            <h2 className="title">Latest Product</h2>
            <div className="row">
                <ProductItem title="Grey Rubber Shoes" price="5,550.00" rating="5" img="/assets/img/product-5.jpg"/>
                <ProductItem title="Black Printed T-shirt" price="650.00" rating="5" img="/assets/img/product-6.jpg"/>
                <ProductItem title="3 Colored Socks" price="250.00" rating="5" img="/assets/img/product-7.jpg"/>
                <ProductItem title="Black Elegant Watch" price="11,550.00" rating="5" img="/assets/img/product-8.jpg"/>
                <ProductItem title="Grey Rubber Shoes" price="5,550.00" rating="5" img="/assets/img/product-9.jpg"/>
                <ProductItem title="Black Printed T-shirt" price="650.00" rating="5" img="/assets/img/product-10.jpg"/>
                <ProductItem title="3 Colored Socks" price="250.00" rating="5" img="/assets/img/product-11.jpg"/>
                <ProductItem title="Black Elegant Watch" price="11,550.00" rating="5" img="/assets/img/product-12.jpg"/>
            </div>
        </div>
    )
}

export default FeaturedProducts
