import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const CartPage = () => {
    return (
        <>
            <title>Home - RedStore</title>
            <Navbar />
            <div className="small-container cart-page">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="/assets/img/buy-1.jpg" alt="" />
                                <div>
                                    <p>Red Printed T-shirt</p>
                                    <small>Price: ₱650.00 </small>
                                    <br />
                                    <Link to="#">Remove</Link>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>₱650.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="/assets/img/buy-2.jpg" alt="" />
                                <div>
                                    <p>Black Running Shoes</p>
                                    <small>Price: ₱2,500.00 </small>
                                    <br />
                                    <Link to="#">Remove</Link>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>₱650.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="/assets/img/buy-3.jpg" alt="" />
                                <div>
                                    <p>Jogger Pants</p>
                                    <small>Price: ₱350.00 </small>
                                    <br />
                                    <Link to="#">Remove</Link>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>₱650.00</td>
                    </tr>
                </table>

                <div className="total-price">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>230</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CartPage
