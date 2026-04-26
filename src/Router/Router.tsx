import { createBrowserRouter } from "react-router";

import Home from "../Components/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import Register from "../Components/Register/Register";
import SignIn from "../Components/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path:"/",
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
    ],
  },
]);

export default router;
