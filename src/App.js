import Cookies from "js-cookie";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import "./styles/app.scss";
import NavBar from "./components/nav/NavBar";
import Login from "./components/pages/Login";
import CheckForAuth from "./util/CheckForAuth";
import Landing from "./components/pages/Landing";
import Songs from "./components/pages/Songs";
import Chords from "./components/pages/Chords";
import TimeSignatures from "./components/pages/TimeSignatures";
import Users from "./components/pages/Users";

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
        <Route
          path="/"
          element={
            <CheckForAuth
              setAuthenticated={setAuthenticated}
              element={<Landing />}
            />
          }
        />
        <Route
          path="/songs"
          element={
            <CheckForAuth
              setAuthenticated={setAuthenticated}
              element={<Songs />}
            />
          }
        />
        <Route
          path="/time-signatures"
          element={
            <CheckForAuth
              setAuthenticated={setAuthenticated}
              element={<TimeSignatures />}
            />
          }
        />
        <Route
          path="/chords"
          element={
            <CheckForAuth
              setAuthenticated={setAuthenticated}
              element={<Chords />}
            />
          }
        />
        <Route
          path="/users"
          element={
            <CheckForAuth
              setAuthenticated={setAuthenticated}
              element={<Users />}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
