import './Cart.css'
import CartCalculation from './CartCalculation'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart, increaseQuantity, decreaseQuantity } from './redux/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items); 
    
    const handleRemoveToCart = (product) => {
        if (product) {
            dispatch(removeItem(product.id));
        }

    };
    const handleIncreaseToCart = (product) => {
        if (product) {
            dispatch(increaseQuantity(product.id));
        }
    };
    const handleDecreaseToCart = (product) => {
        if (product) {
            dispatch(decreaseQuantity(product.id));
        }
    };


    return (
        <>
            {/* <div className={cartItems ? 'container cart1' : 'cart6'}> */}
                <div className='container cart1' >
                    {cartItems.map(item => (
                        <div key={item.id} className='cart2'>
                            <div className='cart3'>
                                <div className='cart31'>
                                    <div className='cart311'>
                                        <img src={item.image} alt='Product img' /> 
                                    </div>
                                </div>
                                <div className='cart32'>
                                    <p><>{item.title}</></p>
                                    <p>Category: {item.category}</p> 
                                    <p>Price: ${item.price}</p> 

                                </div>
                            </div>

                            <div className='cart4'>
                                <div className='cart41'>
                                    <span>
                                        <button onClick={() => handleIncreaseToCart(item)}>+</button>
                                        <button>{item.quantity}</button>
                                        <button onClick={() => handleDecreaseToCart(item)}>-</button>

                                    </span>
                                    <span onClick={() => handleRemoveToCart(item)}>Remove</span>
                                </div>
                                <div className='cart42'>
                                    {`$${item.price.toFixed(2) * item.quantity.toFixed(2)}`} 
                                </div>

                            </div>
                        </div>

                    ))}
                    <hr />

                    <div className='cart5'>
                        <CartCalculation />
                    </div>


                </div >
            {/* </div > */}


        </>
    )
}

export default Cart