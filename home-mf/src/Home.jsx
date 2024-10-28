import React from 'react';
import Header from '../../layout-mf/src/AppHeader'; 
import Categories from '../../categories-mf/src/Categories'; 
import CarouselComponent from './CarouselComponent'; 
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <CarouselComponent /> 
      <Categories />
      <h1> Home</h1>
    </div>
  );
};

export default Home;
