import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const CheckForAuth = ({ element, setAuthenticated }) => {
  const auth = Cookies.get("auth");
  if (!auth) {
    setAuthenticated(false);
    return <Navigate to="/login" />;
  } else {
    return element;
  }
};

export default CheckForAuth;
