import "../Styles/Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bringing Stories to Life, Frame by Frame.</h1>
        <p>Experience the magic of cinema with our creative team.</p>

        <div className="hero-buttons">
          <button className="primary">VIEW OUR PORTFOLIO</button>
          <button className="secondary">GET IN TOUCH</button>
        </div>
      </div>
    </section>
  );
}
