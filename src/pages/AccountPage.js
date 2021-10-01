import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const AccountPage = () => {
    const [add300, setAdd300] = useState(false)

    const loginHandler = () => {
        setAdd300(true)
        document.getElementById('indicator').style.transform = 'translateX(0px)'
    }


    const registerHandler = () => {
        setAdd300(false)
        document.getElementById('indicator').style.transform = 'translateX(100px)'
    }

    return (
        <>
            <title>Home - RedStore</title>
            <Navbar />
            <div className="account-page">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src="/assets/img/image1.png" alt="" width="100%" />
                        </div>
                        <div className="col-2">
                            <div className="form-container">
                                <div className="form-btn">
                                    <span onClick={loginHandler}>Login</span>
                                    <span onClick={registerHandler}>Register</span>
                                    <hr id="indicator" />
                                </div>
                                <form id="loginForm" className={add300 ? 'add300' : ''}>
                                    <input type="text" placeholder="Username" />
                                    <input type="password" placeholder="Password" />
                                    <button type="submit" className="btn">Login</button>
                                    <Link to="#">Forgot password</Link>
                                </form>
                                <form id="registerForm" className={add300 ? 'add300' : ''}>
                                    <input type="text" placeholder="Username" />
                                    <input type="text" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <button type="submit" className="btn">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountPage
