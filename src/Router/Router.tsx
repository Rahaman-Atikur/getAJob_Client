import { createBrowserRouter } from "react-router";

import Home from "../Components/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
