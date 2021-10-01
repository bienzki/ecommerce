import React from 'react'

const TestimonialItem = (props) => {
    return (
        <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>{props.message}</p>
            <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
            </div>
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
        </div>
    )
}

export default TestimonialItem
