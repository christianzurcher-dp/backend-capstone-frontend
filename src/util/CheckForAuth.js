import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const CheckForAuth = ({ element }) => {
  const auth = Cookies.get("auth");
  if (!auth) {
    return <Navigate to="/login" />;
  } else {
    return element;
  }
};

export default CheckForAuth;
