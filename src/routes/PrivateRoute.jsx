import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { loginUser } = useContext(AuthContext);

  if (loginUser) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}
