// import React, { useState, useEffect } from 'react';
// import './AllProducts.css';
// import { PaginationControl } from 'react-bootstrap-pagination-control';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

// const AllProducts = ({ filterText , ndata }) => {
//     const [data, setData] = useState([]);
//     const [totalItems, setTotalItems] = useState(0);
//     const [page, setPage] = useState(1);
//     const itemsPerPage = 9;
//     const [sortBy, setSortBy] = useState('');
//     const [filteredData, setFilteredData] = useState([]);

//     const sortItems = (criteria) => {
//         let sortedItems = [...filteredData];

//         switch (criteria) {
//             case 'priceLowToHigh':
//                 sortedItems.sort((a, b) => a.price - b.price);
//                 break;
//             case 'priceHighToLow':
//                 sortedItems.sort((a, b) => b.price - a.price);
//                 break;
//             case 'popularity':
//                 sortedItems.sort((a, b) => b.rating.count - a.rating.count);
//                 break;
//             case 'rating':
//                 sortedItems.sort((a, b) => b.rating.rate - a.rating.rate);
//                 break;
//             default:
//                 break;
//         }

//         setSortBy(criteria);
//         setFilteredData(sortedItems);
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
             
//                 const modifiedData = ndata.map(item => ({
//                     ...item,
//                     title: truncateTitle(item.title, 7)
//                 }));
//                 setData(modifiedData);
//                 setTotalItems(modifiedData.length);
//                 setFilteredData(modifiedData); 
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const truncateTitle = (title, words) => {
//         const wordArray = title.split(' ');
//         if (wordArray.length <= words) {
//             return title;
//         }
//         return wordArray.slice(0, words).join(' ') + '...';
//     };

//     const handleFilter = () => {
//         const filteredItems = data.filter(item => {
//             const itemValues = Object.values(item).map(value =>
//                 typeof value === 'string' ? value.toLowerCase() : value
//             );
//             return itemValues.some(value =>
//                 typeof value === 'string' && value.includes(filterText.toLowerCase())
//             );
//         });
//         setFilteredData(filteredItems);
//         setPage(1); 
//     };


//     useEffect(() => {
//         handleFilter();
//     }, [filterText]); 

//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

//     const currentPageData = filteredData.slice(startIndex, endIndex);

//     return (
//         <div className='ap1'>
//             <p>Home / Store</p>
//             <div className='ap2'>
//                 <span>Showing {startIndex + 1}–{endIndex} of {filteredData.length} results</span>
//                 <span>
//                     <select value={sortBy} onChange={(e) => sortItems(e.target.value)}>
//                         <option value="">Sort By</option>
//                         <option value="priceLowToHigh">Price Low to High</option>
//                         <option value="priceHighToLow">Price High to Low</option>
//                         <option value="popularity">Popularity</option>
//                         <option value="rating">Rating</option>
//                     </select>
//                 </span>
//             </div>
//             <div className='ap3'>
//                 {currentPageData.map((value) => (
//                     <Link style={{textDecoration:"none", color:"black"}} key={value.id} to={`/product/${value.id}`} className='product-link'>
//                         <div key={value.id} className='mp23'>
//                             <div className='mp24'>
//                                 <img src={value.image} alt='' />
//                             </div>
//                             <p className='title'>{value.title}</p>
//                             <p className='category'>{value.category}</p>
//                             <h5>${value.price}</h5>

//                         </div>
//                     </Link>

//                 ))}
//             </div>

//             <PaginationControl
//                 page={page}
//                 between={4}
//                 total={filteredData.length}
//                 limit={itemsPerPage}
//                 changePage={(page) => {
//                     setPage(page)
//                 }}
//                 ellipsis={1}
//             />
//         </div>
//     );
// };

// export default AllProducts;


import React, { useState, useEffect } from 'react';
import './AllProducts.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AllProducts = ({ filterText, ndata }) => {
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
        const modifiedData = ndata.map(item => ({
            ...item,
            title: truncateTitle(item.title, 7)
        }));
        setData(modifiedData);
        setTotalItems(modifiedData.length);
        setFilteredData(modifiedData);
    }, [ndata]);

    const truncateTitle = (title, words) => {
        const wordArray = title.split(' ');
        if (wordArray.length <= words) {
            return title;
        }
        return wordArray.slice(0, words).join(' ') + '...';
    };

    const handleFilter = () => {
        const filteredItems = data.filter(item => {
            const itemValues = Object.values(item).map(value =>
                typeof value === 'string' ? value.toLowerCase() : value
            );
            return itemValues.some(value =>
                typeof value === 'string' && value.includes(filterText.toLowerCase())
            );
        });
        setFilteredData(filteredItems);
        setPage(1);
    };

    useEffect(() => {
        handleFilter();
    }, [filterText]);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const currentPageData = filteredData.slice(startIndex, endIndex);

    return (
        <div className='ap1'>
            <p>Home / Store</p>
            <div className='ap2'>
                <span>Showing {startIndex + 1}–{endIndex} of {filteredData.length} results</span>
                <span>
                    <select value={sortBy} onChange={(e) => sortItems(e.target.value)}>
                        <option value="">Sort By</option>
                        <option value="priceLowToHigh">Price Low to High</option>
                        <option value="priceHighToLow">Price High to Low</option>
                        <option value="popularity">Popularity</option>
                        <option value="rating">Rating</option>
                    </select>
                </span>
            </div>
            <div className='ap3'>
                {currentPageData.map((value) => (
                    <Link style={{textDecoration:"none", color:"black"}} key={value.id} to={`/product/${value.id}`} className='product-link'>
                        <div key={value.id} className='mp23'>
                            <div className='mp24'>
                                <img src={value.image} alt='' />
                            </div>
                            <p className='title'>{value.title}</p>
                            <p className='category'>{value.category}</p>
                            <h5>${value.price}</h5>

                        </div>
                    </Link>

                ))}
            </div>

            <PaginationControl
                page={page}
                between={4}
                total={filteredData.length}
                limit={itemsPerPage}
                changePage={(page) => {
                    setPage(page)
                }}
                ellipsis={1}
            />
        </div>
    );
};

export default AllProducts;
