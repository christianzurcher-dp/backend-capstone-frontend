import Cookies from "js-cookie";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./styles/app.scss";
import NavBar from "./components/nav/NavBar";
import Login from "./components/pages/Login";
import CheckForAuth from "./util/CheckForAuth";
import { useEffect } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const auth = Cookies.get("auth");
    if (auth) {
      setAuthenticated(true);
    }
  }, [setAuthenticated]);

  return (
    <div className="App">
      {authenticated && <NavBar />}
      <Routes>
        <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
        <Route path="/" element={<CheckForAuth element="Landing" />} />
        <Route path="/songs" element={<CheckForAuth element="Songs" />} />
        <Route
          path="/time-signatures"
          element={<CheckForAuth element="Time-signatures" />}
        />
        <Route path="/chords" element={<CheckForAuth element="Chords" />} />
        <Route path="/users" element={<CheckForAuth element="Users" />} />
      </Routes>
    </div>
  );
}

export default App;
