import Header from "./AppHeader";
import { BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Header />
      {/* other components */}
    </BrowserRouter>
  );
}
