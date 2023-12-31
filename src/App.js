import Cookies from "js-cookie";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const auth = Cookies.get("auth");
    if (!auth) {
      <Navigate to="/login"></Navigate>;
    }
  }, [Cookies]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={"Login"}></Route>
          <Route path="/" element={"Landing"}></Route>
          <Route path="/songs" element={"Songs"}></Route>
          <Route path="/songs" element={"Songs"}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
