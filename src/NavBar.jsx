import { NavLink } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar-Nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "NavBar-Link active" : "NavBar-Link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Soda"
        className={({ isActive }) =>
          isActive ? "NavBar-Link active" : "NavBar-Link"
        }
      >
        Soda
      </NavLink>
      <NavLink
        to="/Chips"
        className={({ isActive }) =>
          isActive ? "NavBar-Link active" : "NavBar-Link"
        }
      >
        Chips
      </NavLink>
      <NavLink
        to="/Chocolate"
        className={({ isActive }) =>
          isActive ? "NavBar-Link active" : "NavBar-Link"
        }
      >
        Chocolate
      </NavLink>
    </nav>
  );
};

export default NavBar;
