import React, { useState, useEffect } from 'react';
import AllProducts from './AllProducts';
import Filter from './Filter';
import './Women.css';

const Women = () => {
  const [filterText, setFilterText] = useState('');
  const [ndata, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        const wdata = jsonData.filter(Woman=>Woman.category==="women's clothing")
        setData(wdata);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (text) => {
    setFilterText(text);
  };

  return (
    <>
      <div className='alp1'>
        <div className='alp2'>
          <Filter data={ndata} onFilterChange={handleFilter} />
        </div>
        <div className='alp3'>
          <AllProducts ndata={ndata} filterText={filterText}/>
        </div>
      </div>
    </>
  );
};

export default Women;
