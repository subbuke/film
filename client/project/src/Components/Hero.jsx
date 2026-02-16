import "../Styles/Hero.css";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section
      className="hero"
    >
      <div className="hero-content">
        <h1>Bringing Stories to Life, Frame by Frame.</h1>
        <p>Experience the magic of cinema with our creative team.</p>

        <div className="hero-buttons">
          <button className="primary"><Link to="./portfolio" className="btn">VIEW OUR PORTFOLIO</Link></button>
          <button className="secondary"> <Link to="./contact" className="btn">GET IN TOUCH</Link></button>
        </div>
      </div>
    </section>
  );
}
