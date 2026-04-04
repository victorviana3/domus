import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import "./index.css";
import App from "./App.jsx";
import { NotFoundPage } from "./components/NotFoundPage.jsx";
import { Familias } from "./components/Familias.jsx";
import { Pessoas } from "./components/Pessoas.jsx";
import { AdicionarFamilia } from "./components/AdicionarFamilia.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/familias", element: <App component={<Familias />} /> },
  { path: "/pessoas", element: <App component={<Pessoas />} /> },
  {
    path: "/adicionar/familia",
    element: <App component={<AdicionarFamilia />} />,
  },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
