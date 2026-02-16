import { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="logo">
       <Link to="/"><img src={logo} alt="DayDreamCinemas Logo" /></Link>
      </div>

      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {[
          { to: "/", label: "Home" },
          { to: "/contact", label: "contact" },
          { to: "/videos", label: "Videos" },
          { to: "/portfolio", label: "Portfolio" },
          { to: "/about", label: "About us" },
        ].map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
