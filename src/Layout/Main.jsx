import { Outlet } from "react-router-dom";
import Footer from "../Router/Shared/Footer";
import NavBar from "../Router/Shared/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
