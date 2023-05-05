import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { loginUser } = useContext(AuthContext);

  const location = useLocation();
  if (loginUser === false) <div>loading...</div>;
  if (loginUser) {
    return children;
  }
  if (loginUser === null) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
}
