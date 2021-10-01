import React from 'react'
import ProductItem from '../components/layout/ProductItem'
import Navbar from '../components/navbar/Navbar'

const ProductsPage = () => {
    return (
        <>
            <title>Products - RedStore</title>
            <Navbar />
            <div className="small-container">
                <div className="row row-2">
                    <h2>All Products</h2>
                    <select>
                        <option>Price</option>
                        <option>Name</option>
                        <option>Rating</option>
                    </select>
                </div>
                <div className="row">
                    <ProductItem title="Red Printed T-shirt" price="650.00" rating="5" img="/assets/img/product-1.jpg" />
                    <ProductItem title="Black Running Shoes" price="2,500.00" rating="5" img="/assets/img/product-2.jpg" />
                    <ProductItem title="Jogger Pants" price="350.00" rating="5" img="/assets/img/product-3.jpg" />
                    <ProductItem title="Navy Blue Polo Shirt" price="850.00" rating="5" img="/assets/img/product-4.jpg" />
                    <ProductItem title="Grey Rubber Shoes" price="5,550.00" rating="5" img="/assets/img/product-5.jpg" />
                    <ProductItem title="Black Printed T-shirt" price="650.00" rating="5" img="/assets/img/product-6.jpg" />
                    <ProductItem title="3 Colored Socks" price="250.00" rating="5" img="/assets/img/product-7.jpg" />
                    <ProductItem title="Black Elegant Watch" price="11,550.00" rating="5" img="/assets/img/product-8.jpg" />
                    <ProductItem title="Grey Rubber Shoes" price="5,550.00" rating="5" img="/assets/img/product-9.jpg" />
                    <ProductItem title="Black Printed T-shirt" price="650.00" rating="5" img="/assets/img/product-10.jpg" />
                    <ProductItem title="3 Colored Socks" price="250.00" rating="5" img="/assets/img/product-11.jpg" />
                    <ProductItem title="Black Elegant Watch" price="11,550.00" rating="5" img="/assets/img/product-12.jpg" />
                </div>
                <div className="page-btn">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&#8594;</span>
                </div>
            </div>
        </>
    )
}

export default ProductsPage
