import React from 'react'
import TestimonialItem from './TestimonialItem'

const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="small-container">
                <div className="row">
                    <TestimonialItem
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        img="/assets/img/user-1.png"
                        name="Sean Parker"
                        rating="5" />
                    <TestimonialItem
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        img="/assets/img/user-2.png"
                        name="Mike Smith"
                        rating="5" />
                    <TestimonialItem
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        img="/assets/img/user-3.png"
                        name="Mabel Joe"
                        rating="5" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
