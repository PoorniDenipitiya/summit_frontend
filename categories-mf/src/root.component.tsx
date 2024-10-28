/*export default function Root(props) {
  return <section>{props.name} is mounted!</section>;
}*/
import { BrowserRouter } from 'react-router-dom';
import Categories from './Categories';

export default function Root() {
  return (
    <div>
      <BrowserRouter>
      <Categories />
      {/* other components */}
      </BrowserRouter>
    </div>
  );
}