import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { PetDetails } from "./pages/PetDetails";
import { Pets } from "./pages/Pets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pets",
    children: [
      {
        index: true,
        element: <Pets />,
      },
      {
        path: "/pets/:id",
        element: <PetDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <h1>Admin</h1>,
  },
]);

export default router;
