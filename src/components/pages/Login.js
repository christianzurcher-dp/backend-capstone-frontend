import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import asyncAPICall from "../../util/apiWrapper";

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = await asyncAPICall("/auth/user", "POST", {
      email: email,
      password: password,
    });

    if (data?.auth_token) {
      Cookies.set("auth", data.auth_token, {
        expires: new Date(data.expiration),
      });
      Cookies.set("user_id", data.user_id);
      // this is in place of an auth context it's used to
      // pass the user_id of the authenticated user to see if it matches the creator_id of the song, chord, etc.
      // to see whether they should be able to edit it or not

      navigate("/");
      setAuthenticated(true);
    } else {
      console.error("invalid login");
      setEmail("");
      setPassword("");
    }

    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="email-field">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <div className="password-field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging In..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
