import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const notify = () => toast.error('You have to log in first to view details')

  if (loading) {
    return (
      <div className="mx-auto my-40">
        <ColorRing
          visible={true}
          height="400"
          width="400"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#e15b64", "#f47e60", "#e15b64"]}
        />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    notify()
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
