import { createBrowserRouter } from "react-router-dom";
import { AuthHOC } from "./components/common/AuthHOC/AuthHOC";
import { PetList } from "./pages/Admin/PetList";
import { Shelter } from "./pages/Admin/Shelter";
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
    children: [
      {
        index: true,
        element: <Shelter />,
      },
      {
        path: "/admin/pets",
        element: <AuthHOC />,
        children: [
          {
            index: true,
            element: <PetList />,
          },
        ],
      },
    ],
  },
]);

export default router;
