import { useAuth } from "../context/context";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ ProtectedComponent }) {
  const {
    authState: { isLoggedIn },
  } = useAuth();

  return (
    <>{isLoggedIn ? ProtectedComponent : <Navigate replace to="/login" />}</>
  );
}

