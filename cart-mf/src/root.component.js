import { BrowserRouter } from 'react-router-dom';
import Cartnotif from './CartNotification';


export default function Root() {
  return (
    <div>
      <BrowserRouter>
        <Cartnotif/>
      {/* other components */}
      </BrowserRouter>
    </div>
  );
}