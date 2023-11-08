import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Router/Routes";
import AuthProvider from "./Provider/AuthContext";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <div  className="dark:bg-[#393658]">
    <React.StrictMode>
      <AuthProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
