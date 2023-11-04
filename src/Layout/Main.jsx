import { Outlet } from "react-router-dom";
import Footer from "../Router/Shared/Footer";
import Home from "../Home/Home";
const Main = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
