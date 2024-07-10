import React from 'react'
import OfferComponent from '../Components/OfferComponent';
import MainPage1 from '../Components/MainPage1';
import MainPage2 from '../Components/MainPage2';
import Quality from './Quality';

const Home = () => {
  return (
    <>
    <OfferComponent/>
      <MainPage1/>
      <MainPage2/>
      <Quality/>
    </>
  )
}

export default Home