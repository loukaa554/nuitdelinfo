import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// css
import "./App.css";
import "./assets/css/reset.css";
import "./assets/css/root.css";

// pages
import Home from "./pages/home";
import Worst from "./pages/worst";
import Cookie from "./pages/cookie";
import Vision from "./pages/vision";

// components
function App() {
  const router = createBrowserRouter([
    {
      // errorElement: <ErrorPage />,
      path: "/",
      element: [
        // <Nav key="nav" />,
        <Outlet key="outlet" />,
        // <Footer key="footer" />,
      ],
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "worst",
          element: <Worst />,
        },
        {
          path: "cookie",
          element: <Cookie />,
        },
      ],
    },
    {
      // errorElement: <ErrorPage />,
      path: "/vision",
      element: [
        // <Nav key="nav" />,
        <Outlet key="outlet" />,
        // <Footer key="footer" />,
      ],
      children: [
        {
          path: "",
          element: <Vision />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
