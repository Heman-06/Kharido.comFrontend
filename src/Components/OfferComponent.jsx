import React from 'react'
import './OfferComponent.css'
import { useNavigate } from 'react-router-dom'

const OfferComponent = () => {
    const navigate = useNavigate();
    const jaao = () => {
        navigate('/everything');
    }
    return (
        <>
            <div>
                <div className='OI'>
                    {/* <img src={OfferImage} alt='offerimage' /> */}
                </div>
                <div className='OI2'>
                    <h1>Raining Offers For Hot Summer!</h1>
                    <h2>25% Off On All Products</h2>
                    <span>
                        <button onClick={jaao}>Shop Now</button>
                        <button onClick={jaao}>Find More</button>
                    </span>
                </div>



            </div>
        </>
    )
}

export default OfferComponent