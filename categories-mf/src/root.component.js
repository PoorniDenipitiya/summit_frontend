import { BrowserRouter } from "react-router-dom";
import Categories from "./Categories";

export default function Root() {
  return (
    <BrowserRouter>
      <Categories />
      {/* other components */}
    </BrowserRouter>
  );
}
