import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/songs">Songs</NavLink>
      <NavLink to="/time-signatures">Time Signatures</NavLink>
      <NavLink to="/chords">Chords</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default NavBar;
