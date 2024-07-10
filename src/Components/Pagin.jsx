// AllProducts.js

import React, { useState, useEffect } from 'react';
import './AllProducts.css';
import ProductList from './List';
import SortingDropdown from './Dropdown';
import PaginationComponent from './PaginationComponent';
import Filter from './Filter';

const AllProducts = ({ filterText }) => {
    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [page, setPage] = useState(1);
    const itemsPerPage = 9;
    const [sortBy, setSortBy] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const sortItems = (criteria) => {
        let sortedItems = [...filteredData];

        switch (criteria) {
            case 'priceLowToHigh':
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case 'priceHighToLow':
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            case 'popularity':
                sortedItems.sort((a, b) => b.rating.count - a.rating.count);
                break;
            case 'rating':
                sortedItems.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            default:
                break;
        }

        setSortBy(criteria);
        setFilteredData(sortedItems);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const json = await response.json();
                const modifiedData = json.map(item => ({
                    ...item,
                    title: truncateTitle(item.title, 7)
                }));
                setData(modifiedData);
                setTotalItems(modifiedData.length);
                setFilteredData(modifiedData); // Initialize filteredData with all data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const truncateTitle = (title, words) => {
        const wordArray = title.split(' ');
        if (wordArray.length <= words) {
            return title;
        }
        return wordArray.slice(0, words).join(' ') + '...';
    };

    const handleFilter = () => {
        const filteredItems = data.filter(item => {
            // Convert each item to lowercase for case-insensitive search
            const itemValues = Object.values(item).map(value =>
                typeof value === 'string' ? value.toLowerCase() : value
            );
            // Check if any of the item's values contain the filter text
            return itemValues.some(value =>
                typeof value === 'string' && value.includes(filterText.toLowerCase())
            );
        });
        setFilteredData(filteredItems);
        setPage(1); // Reset page number when filtering
    };

    useEffect(() => {
        handleFilter();
    }, [filterText]); // Trigger filtering when filterText changes

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const currentPageData = filteredData.slice(startIndex, endIndex);

    return (
        <div className='ap1'>
            <p>Home / Store</p>
            <div className='ap2'>
                {/* Sorting Dropdown Component */}
                <SortingDropdown sortBy={sortBy} onSortChange={sortItems} />
            </div>
            {/* Filter Component */}
            {/* <Filter data={data} onFilterChange={handleFilter} /> */}
            {/* Product List Component */}
            <ProductList products={currentPageData} />
            {/* Pagination Component */}
            <PaginationComponent
                currentPage={page}
                totalItems={filteredData.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setPage}
            />
        </div>
    );
};

export default AllProducts;
