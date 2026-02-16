import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="DayDreamCinemas Logo" />
      </div>

      <ul className="nav-links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
        <li><NavLink to="/videos" className="nav-link">Videos</NavLink></li>
        <li><NavLink to="/portfolio" className="nav-link">Portfolio</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
