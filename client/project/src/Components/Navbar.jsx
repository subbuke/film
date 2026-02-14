import "../Styles/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>DC</h2>
        <span>DayDreamCinemas</span>
      </div>

      <ul className="nav-links">
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
