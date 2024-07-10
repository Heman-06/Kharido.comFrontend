import React from 'react'
import './MainPage2.css'
import img8 from '../Images/tamara-bellis-nbC4EyCxhb8-unsplash.jpg'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



const MainPage2 = () => {

    const navigate = useNavigate();
    const jaao = () => {
        navigate('/everything')
    }
    const [data, setData] = useState([]);

    useEffect(() => {
        showCardPics();
    }, []
    )

    const showCardPics = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const limitedData = response.data.slice(1, 9);
            setData(limitedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className='MP21'>
                <h1>Featured Products
                    <hr className='hr' />
                </h1>
                <div className="line">
                    {data.map((value, index) => (
                        <div className='MP22'>
                            <div className='mp23' key={index}>
                                <div className='mp24'>
                                    <img src={value.image} alt='imaged' />
                                </div>
                                <p className='title'>{value.title}</p>
                                <p className='category'>Price : {value.price}$</p>
                                <h5>Rating : {value.rating.rate}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='l1'>
                    <div className='l2'>
                        <h4>Limited Time Offer</h4>
                        <h1>  Special Edition</h1>
                        <h6>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                            <br /> ullamcorper mattis, pulvinar dapibus leo.</h6>
                        <h4> Buy This T-shirt At 20% Discount, Use Code OFF20</h4>
                        <button onClick={jaao}>Shop Now</button>
                    </div>
                    <div className='l3'>
                        <img src={img8} alt='' />
                    </div>

                </div>


            </div>
        </>
    )
}

export default MainPage2