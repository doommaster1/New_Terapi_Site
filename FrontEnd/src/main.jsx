// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Import Layout dan Pages
import MainLayout from "./components/mainLayout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import OurService from "./pages/OurService.jsx";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// Membuat daftar rute (Best Practice React Router v6+)
const router = createBrowserRouter([
  {
    path: "/", // Rute induk
    element: <MainLayout />, // Dibungkus oleh Layout yang ada Navbarnya
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "/OurService", 
        element: <OurService />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Menggantikan <App /> dengan <RouterProvider /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
