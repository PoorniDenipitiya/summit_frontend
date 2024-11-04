import React from 'react';
//import ReactDOM from "react-dom";
//import Header from '../../layout-mf/src/AppHeader'; 
import Header from 'layout/AppHeader'; 
//import Categories from '../../categories-mf/src/Categories'; 
import CarouselComponent from './CarouselComponent'; 
import './Home.css'; 

//const Header = React.lazy(() => import("layout/AppHeader"));

const Home = () => {
  return (
    <div className="home-container" >
        <Header />
      <CarouselComponent /> 
     {/* <Categories /> */}
      <h1> Home</h1>
    </div>
  );
};

//ReactDOM.render(<Home />, document.getElementById("home"));

export default Home;
