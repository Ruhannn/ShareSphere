import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Router/Routes";
import AuthProvider from "./Provider/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div  className="dark:bg-[#393658]">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
