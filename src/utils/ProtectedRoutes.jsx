import { Outlet, Navigate } from "react-router-dom";
import { getUserToken, mockAuth } from "../auth";

const ProtectedRoutes = () => {
  const user = getUserToken();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
