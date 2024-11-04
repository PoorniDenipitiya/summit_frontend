import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Carouselcomp from './CarouselComponent';


export default function Root() {
  return (
   
      <Router>
        <Home/>
        <Carouselcomp/>
      {/* other components */}
      </Router>
   
  );
}