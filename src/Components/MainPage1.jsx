import React, { useEffect, useState } from 'react'
import './MainPage1.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MainPage1 = () => {

    const navigate = useNavigate();
    const go = () => {
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
            const limitedData = response.data.slice(1, 4);
            setData(limitedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <><div className="mp0">
            {data.map((data, index) => (
                <div className='MP1'>
                    <div className='MP2' key={index}>
                        <div className="shadow"></div>
                        <img src={data.image} alt={`img${index + 1}`} />
                        <div className='MP3'>
                            <p className='cardtitle'>20% Off On Tank Tops</p>
                            <p className='carddes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                            <button onClick={go}>Shop Now</button>
                        </div>
                    </div>
                    {/* <div className='MP2' key={index}>
                        <img src={data.image} alt={`img${index + 2}`} />
                        <div className='MP3'>
                            <p className='cardtitle'>20% Off On Tank Tops</p>
                            <p className='carddes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className='MP2' key={index}>
                        <img src={data.image} alt={`img${index + 3}`} />

                        <div className='MP3'>
                            <p className='cardtitle'>20% Off On Tank Tops</p>
                            <p className='carddes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                            <button>Shop Now</button>
                        </div>
                    </div> */}
                </div>
            ))}
        </div>
        </>
    )
}

export default MainPage1