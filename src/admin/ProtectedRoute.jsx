import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const loggedIn = localStorage.getItem("adminLogin");

  if (!loggedIn) {

    return <Navigate to="/admin" replace />;

  }

  return children;

}

export default ProtectedRoute;