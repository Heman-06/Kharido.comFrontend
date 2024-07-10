import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Detail.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductDescription from './ProductDescription';
import AdditionalInfo from './AdditionalInfo';
import Review from './Review';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/cartSlice'; // Only import addItem action
import { useNavigate } from 'react-router-dom';


const Detail = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const handleAddToCart = () => {
        if (product) {
            dispatch(addItem(product)); // Dispatch addItem action with product data
        }
        navigate("/cart");
    };
    
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [productId]);

    return (
        <div className='container'>
            {product && (
                <div className='dtl1'>
                    <div className='dtl2'>
                        <div className='dtl21'>
                            <img src={product.image} alt={product.title} />
                        </div>
                        {/* Render other product images if available */}
                    </div>
                    <div className='dtl3'>
                        <p className='dtlp1'>Home / {product.category} / {product.title}</p>
                        <p className='dtlp2'>{product.category}</p>
                        <p className='dtlp3'>{product.title}</p>
                        <p className='dtlp4'>$ {product.price}</p>
                        <p className='dtlp5'>{product.description}</p>
                        <div className='dtl30'>
                            <br />
                        </div>
                        <div className='dtl31'>
                            <div className='dtl33'>
                                <button onClick={handleAddToCart}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Render tabs for additional information */}
            <div className='dtl4'>
                <div>
                    <Tabs defaultActiveKey="profile" id="justify-tab-example" className=" dtl01 mb-5">
                        <Tab eventKey="profile" title="Description">
                            {product && product.description && <ProductDescription description={product.description} />}
                        </Tab>
                        <Tab eventKey="profile1" title="Additional Information">
                            <AdditionalInfo />
                        </Tab>
                        <Tab eventKey="profile2" title="Reviews">
                            <Review />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Detail;
