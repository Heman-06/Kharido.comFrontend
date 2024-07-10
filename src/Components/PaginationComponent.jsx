import React from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

const PaginationComponent = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    return (
        <PaginationControl
            page={currentPage}
            between={4}
            total={totalItems}
            limit={itemsPerPage}
            changePage={onPageChange}
            ellipsis={1}
        />
    );
};

export default PaginationComponent;
