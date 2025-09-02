import { Navigate } from "react-router-dom";
import { useAuth } from "../ecommerce/src/component/Context/AuthContect";
 // adjust path if needed

// For normal protected pages (only logged-in users)
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// For admin-only pages
export const AdminRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (user?.role !== "admin") return <Navigate to="/" />; // redirect non-admins

  return children;
};
export default AdminRoute;