import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Contact from "./pages/Contact";
import Grass, { loader as grassLoader } from "./pages/Grass";
import Home, { loader as homeLoader } from "./pages/Home";
import Pokemon, { loader as pokeLoader } from "./pages/Pokemon";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home />, loader: homeLoader },
      {
        path: "grass",
        element: <Grass />,
        loader: grassLoader,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "pokemon/:id",
        element: <Pokemon />,
        loader: pokeLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
