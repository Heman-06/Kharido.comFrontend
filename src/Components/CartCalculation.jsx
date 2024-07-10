import React from 'react';
import { useSelector } from 'react-redux';
import './CartCalculation.css';

const CartCalculation = () => {
  const cartItems = useSelector(state => state.cart.items);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  // Calculate total
  const total = subtotal; // For now, let's assume total is same as subtotal

  return (
    <div className='cc1'>
      <div className="cc2">
        <h5>Total: <span>${total.toFixed(2)}</span></h5>
      </div>
      <div className="cc3">
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartCalculation;
