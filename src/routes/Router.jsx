import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogIn from "../pages/shared/LogIn/LogIn";
import Home from "../pages/Home/Home/Home";
import Resister from "../pages/shared/Resister/Resister";
import RecipeLayout from "../layout/RecipeLayout";
import Recipe from "../pages/Recipe/Recipe";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "resister",
        element: <Resister />,
      },
      {
        path: "recipeLayout",
        element: <RecipeLayout />,
      },
      {
        path: "recipe/:id",
        element: (
          <PrivateRoute>
            <RecipeLayout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_URL}/recipe/${params.id}`),
      },
    ],
  },
]);
export default router;
