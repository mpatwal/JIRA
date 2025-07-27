import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // adjust if you store role elsewhere

  const isAdmin = token && userRole === "ADMIN"; // change this based on your logic

  return isAdmin ? children : <Navigate to="/login" />;
};

export default AdminRoutes;
