import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogIn from "../pages/shared/LogIn/LogIn";
import Home from "../pages/Home/Home/Home";
import Resister from "../pages/shared/Resister/Resister";
import RecipeLayout from "../layout/RecipeLayout";
import Recipe from "../pages/Recipe/Recipe";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
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
          fetch(`http://localhost:5000/recipe/${params.id}`),
      },
    ],
  },
]);
export default router;
