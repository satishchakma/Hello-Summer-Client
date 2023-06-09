import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center mx-auto">
        <progress className="progress w-56"></progress>
        <h1>
          Please Login to go to this route{" "}
          <Link to="/login" className="btn btn-accent">
            Login
          </Link>
        </h1>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
