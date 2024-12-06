import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Team from "./pages/team.jsx";
import Budaya from "./pages/budaya.jsx";
import DetailBudaya from "./pages/detailBudaya.jsx";
import NilaiLuhur from "./pages/nilai-luhur.jsx";
import Login from "./pages/login.jsx";
import Contact from "./pages/contact-us.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/budayas",
    element: <Budaya />,
  },
  {
    path: "/budaya/:id",
    element: <DetailBudaya />,
  },
  {
    path: "/nilai-luhur",
    element: <NilaiLuhur />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
