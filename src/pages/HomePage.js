import React from 'react'
import Banner from '../components/layout/Banner'
import FeaturedCategories from '../components/layout/FeaturedCategories'
import FeaturedProducts from '../components/layout/FeaturedProducts'
import Offer from '../components/layout/Offer'
import Testimonial from '../components/layout/Testimonial'
import Navbar from '../components/navbar/Navbar'

const HomePage = () => {
    return (
        <>
            <title>Home - RedStore</title>
            <div className="header">

                <Navbar />
                <Banner />

            </div>

            <FeaturedCategories />
            <FeaturedProducts />
            <Offer />
            <Testimonial />
        </>
    )
}

export default HomePage
