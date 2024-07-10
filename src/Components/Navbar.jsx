import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeadRoom from 'react-headroom'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Navbar = () => {


    const cartItems = useSelector(state => state.cart.items);


    const sutotal = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);


    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };


    return (
        <>
            <HeadRoom>
                <nav >
                    <div className='nv1'>
                        <Link to="/"><span>Kharido.com</span></Link>
                        <Link to="/everything">Everything</Link>
                        <Link to="/men">Men</Link>
                        <Link to="/women">Women</Link>
                        <Link to="/Accessories">Accessories</Link>
                    </div>
                    <div className='nv1'>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact US</Link>
                        <Link to="/cart"><ShoppingCartIcon /><sup>{sutotal}</sup></Link>
                        <Link to="/signin"><Person2Icon /></Link>
                    </div>
                    <div className='hmb'>
                        <span>
                            <Link to="/"><h4>Kharido.com</h4></Link>
                        </span>
                        <span>
                            <button className="hamburger" onClick={toggleMenu}>
                                ☰
                            </button>
                        </span>
                    </div>
                    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <Link to="/everything" onClick={closeMenu}>Everything</Link>
                        <Link to="/men" onClick={closeMenu}>Men</Link>
                        <Link to="/women" onClick={closeMenu}>Women</Link>
                        <Link to="/Accessories" onClick={closeMenu}>Accessories</Link>
                        <Link to="/about" onClick={closeMenu}>About</Link>
                        <Link to="/contact" onClick={closeMenu}>Contact US</Link>
                        <Link to="/cart" onClick={closeMenu}><ShoppingCartIcon /><sup>{sutotal}</sup></Link>
                        <Link to="/signin" onClick={closeMenu}><Person2Icon /></Link>        </div>
                </nav>
            </HeadRoom>
        </>
    )
}

export default Navbar