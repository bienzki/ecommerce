import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
    return (
        <div className="col-4">
            <Link to="/product-details">
                <img src={props.img} alt="" />
                <h4>{props.title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>₱{props.price}</p>
            </Link>
        </div>
    )
}

export default ProductItem
