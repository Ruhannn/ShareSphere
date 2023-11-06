import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../LogIn_SignUp/Login";
import Home from "../Home/Home";
import SignUp from "../LogIn_SignUp/SignUp";

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
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
