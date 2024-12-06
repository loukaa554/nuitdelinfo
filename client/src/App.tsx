import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// CSS
import "./App.css";

// Pages
import Home from "./pages/home";
import Vision from "./pages/vision";
import Cookie from "./pages/cookie";

function Layout() {
  return (
    <>
      {/* Ajouter Nav ici si nécessaire */}
      <Outlet />
      {/* Ajouter Footer ici si nécessaire */}
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "cookie",
          element: <Cookie />,
        },
      ],
    },
    {
      path: "vision",
      element: <Layout />,
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
