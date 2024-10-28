import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Carouselcomp from './CarouselComponent';


export default function Root() {
  return (
    <div>
      <BrowserRouter>
        <Home/>
        <Carouselcomp/>
      {/* other components */}
      </BrowserRouter>
    </div>
  );
}