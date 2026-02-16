import  "../Styles/about.css"

export default function About() {
  return (
    <section className="about-page">
      
    
      {/* HERO */}
      <div className="about-hero">
        <h1>About DayDreamCinemas</h1>
        <p>
          Crafting cinematic stories that inspire, engage, and leave a lasting impact.
        </p>
      </div>

      {/* CONTENT */}
      <div className="about-content">

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            DayDreamCinemas is a creative film production studio focused on storytelling
            through powerful visuals. We specialize in film production, advertisements,
            music videos, and event coverage.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            To bring ideas to life frame by frame, blending emotion, creativity,
            and cinematic excellence to create unforgettable visual experiences.
          </p>
        </div>

        <div className="about-text">
          <h2>Why Choose Us</h2>
          <p>
            With a passionate creative team and professional production approach,
            we transform concepts into visually stunning stories that connect
            deeply with audiences.
          </p>
        </div>

      </div>
    </section>
  );
}
