import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const addStickyClass = () => {
        if (window.scrollY > 5) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const toggleMenu = () => {
        const menuItems = document.querySelector('#menu-items')

        if (showNav) {
            menuItems.style.maxHeight = '0px';
            setShowNav(false)
        } else {
            menuItems.style.maxHeight = '200px';
            setShowNav(true)
        }
    }

    window.addEventListener('scroll', addStickyClass)

    return (
        <div className={navbar ? 'navbar sticky' : 'navbar'}>
            <div className="logo">
                <Link to="/">
                    <img src="/assets/img/logo.png" width="125" alt="" />
                </Link>
            </div>
            <nav>
                <ul id="menu-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/account">Account</Link></li>
                </ul>
            </nav>
            <Link to="/cart"><img src="/assets/img/cart.png" width="30" height="30" alt="" /></Link>
            <img src="/assets/img/menu.png" className="menu-icon" alt="" onClick={toggleMenu} />
        </div>
    )
}

export default Navbar
