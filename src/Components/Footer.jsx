import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {


    return (
        <>
            <div className='footer1'>
                <div className='f1'>
                    <h1>Kharido.com</h1>
                    <h3>The best look anytime, anywhere.</h3>
                </div>
                <div className='f2'>
                    <h3>For Her</h3>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/everything">Women Jeans</Link><br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/everything">Tops and Shirts</Link><br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/everything">Women Jackets</Link><br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/everything">Heels and Flats</Link><br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/everything">Women Accessories</Link>
                </div>
                <div className='f3' >
                    <h3>For Him</h3>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/everything">Men Shirts</Link><br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/everything">Men Shoes</Link><br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/everything">Men Accessories</Link><br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/everything">Men Jackets</Link>
                </div>
                <div className='f4'>
                    <h2>Subscribe</h2>
                    <input type='email' placeholder='Enter Your Email' required />
                    <button>Subscribe</button>
                </div>

            </div>

            <div className='footer2'>
                <div>
                    Copyright © 2024 Kharido.com. Powered by Kharido.com.
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default Footer