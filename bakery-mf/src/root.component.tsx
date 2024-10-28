import { BrowserRouter } from 'react-router-dom';
import Bakery from './BakeryPage';
import Bakerymore from './BakerySeeMore';

export default function Root() {
  return (
    <div>
      <BrowserRouter>
        <Bakery/>
        <Bakerymore/>
      {/* other components */}
      </BrowserRouter>
    </div>
  );
}
