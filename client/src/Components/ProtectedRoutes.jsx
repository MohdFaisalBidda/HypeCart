import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({
  isAuthenticated,
  children,
  adminOnly,
  admin,
  redirect = "/login",
}) => {
  if (!isAuthenticated) return <Navigate to={redirect} />;
  if (adminOnly && !admin) return <Navigate to={redirect} />;
  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
