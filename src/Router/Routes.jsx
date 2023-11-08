import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../LogIn_SignUp/Login";
import Home from "../Home/Home";
import SignUp from "../LogIn_SignUp/SignUp";
import AllServices from "../Components/allServices";
import Photooo from "../Components/FAdf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      }
      ,
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/all-services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/Photooo",
        element: <Photooo></Photooo>,
      },
    ],
  },
]);
export default router;
