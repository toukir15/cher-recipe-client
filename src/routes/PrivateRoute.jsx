import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { loginUser } = useContext(AuthContext);

  const location = useLocation();

  if (loginUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
