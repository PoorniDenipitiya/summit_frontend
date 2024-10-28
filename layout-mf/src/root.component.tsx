import { BrowserRouter } from 'react-router-dom';
import Header from './AppHeader';

export default function Root() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      {/* other components */}
      </BrowserRouter>
    </div>
  );
}