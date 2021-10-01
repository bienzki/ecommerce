import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const ProductDetailsPage = () => {


    const changeImageHandler = (e) => {
        document.getElementById('product-img').src = e.target.src;
    }

    return (
        <>
            <title>Product Details - RedStore</title>
            <Navbar />
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <img src="/assets/img/gallery-1.jpg" width="100%" alt="" id="product-img" />
                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img src="/assets/img/gallery-1.jpg" width="100%" alt="" onClick={changeImageHandler} />
                            </div>
                            <div className="small-img-col">
                                <img src="/assets/img/gallery-2.jpg" width="100%" alt="" onClick={changeImageHandler} />
                            </div>
                            <div className="small-img-col">
                                <img src="/assets/img/gallery-3.jpg" width="100%" alt="" onClick={changeImageHandler} />
                            </div>
                            <div className="small-img-col">
                                <img src="/assets/img/gallery-4.jpg" width="100%" alt="" onClick={changeImageHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <p>Home / T-Shirt</p>
                        <h1>Red Printed T-shirt by HRX</h1>
                        <h4>₱650.00</h4>
                        <select>
                            <option>Select Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                        <input type="number" value="1" />
                        <Link to="/cart" className="btn">Add To Cart</Link>
                        <h3>Product Details <i className="fa fa-indent"></i></h3>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="small-container">
                <div className="row row-2">
                    <h2>Related Product</h2>
                    <p>View More</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage
