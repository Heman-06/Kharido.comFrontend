import React from 'react';
import ProductItem from './Item';

const ProductList = ({ products }) => {
    return (
        <div className='ap3'>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
