import React from 'react';

const ProductItem = ({ product }) => {
   
    return (
        <div className='mp23'>
            <div className='mp24'>
                <img src={product.image} alt='' />
            </div>
            <p className='title'>{product.title}</p>
            <p className='category'>{product.category}</p>
            <h5>${product.price}</h5>
        </div>
    );
};

export default ProductItem;
