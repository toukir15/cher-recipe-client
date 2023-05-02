import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogIn from "../pages/shared/LogIn/LogIn";
import Home from "../pages/Home/Home/Home";
import Resister from "../pages/shared/Resister/Resister";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "resister",
        element: <Resister />,
      },
    ],
  },
]);
export default router;
