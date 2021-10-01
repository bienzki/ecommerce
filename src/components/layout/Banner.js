import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="container">
            <div className="row banner">
                <div className="col-2">
                    <h1>Give Your Workout<br />A New Style!</h1>
                    <p>
                        Success isn't always about greatness. It's about consistency.
                        Consistent<br />hard work gains success. Greatness will come.
                    </p>
                    <Link to="#" className="btn">Explore Now &#8594;</Link>
                </div>
                <div className="col-2">
                    <img src="/assets/img/image1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
