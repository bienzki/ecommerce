import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Downlour Our App</h3>
                        <p>Download App for Android and iOS mobile phone.</p>
                        <div className="app-logo">
                            <img src="/assets/img/play-store.png" alt="" />
                            <img src="/assets/img/app-store.png" alt="" />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src="/assets/img/logo-white.png" alt="" />
                        <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className="copyright">Copyright 2021 - Easy Tutorials</p>
            </div>
        </div>
    )
}

export default Footer
