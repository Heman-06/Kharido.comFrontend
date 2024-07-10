// Filter.js
import React, { useState, useEffect } from 'react';
import './Filter.css';

const Filter = ({ onFilterChange, data }) => {
    const [searchText, setSearchText] = useState('');
    const [categoryCounts, setCategoryCounts] = useState({});

    useEffect(() => {
        if (data && data.length > 0) {
            const counts = {
                men: data.filter(product => product.category.toLowerCase() === "men's clothing").length,
                women: data.filter(product => product.category.toLowerCase() === "women's clothing").length,
                accessories: data.filter(product =>
                    product.category.toLowerCase() === 'jewelery' ||
                    product.category.toLowerCase() === 'electronics'
                ).length
            };

            setCategoryCounts(counts);
        }
    }, [data]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        onFilterChange(e.target.value);
    };

    return (
        <div className='ftr1'>
            <input
                type='text'
                placeholder='Search...'
                value={searchText}
                onChange={handleSearch}
            />
            <div>
                <h3>Filter By Price</h3>
            </div>
            <div className='ftr2'>
                <h3>Categories</h3>
                <div className='item'>
                    <span>Accessories</span>
                    <span>({categoryCounts.accessories || 0})</span> {/* Handle case when categoryCounts is not yet populated */}
                </div>
                <div className='item'>
                    <span>Men</span>
                    <span>({categoryCounts.men || 0})</span>
                </div>
                <div className='item'>
                    <span>Women</span>
                    <span>({categoryCounts.women || 0})</span>
                </div>
            </div>
        </div>
    );
};

export default Filter;
