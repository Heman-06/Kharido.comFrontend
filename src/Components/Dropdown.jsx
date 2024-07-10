import React from 'react';

const SortingDropdown = ({ sortBy, onSortChange }) => {
    return (
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
            <option value="-1">Sort By</option>
            <option value="priceLowToHigh">Price Low to High</option>
            <option value="priceHighToLow">Price High to Low</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
        </select>
    );
};

export default SortingDropdown;
