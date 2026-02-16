import "../Styles/portfolio.css"
import Work from "./Work";

const projects = [
  { id: 1, title: "Short Film Project", category: "Film Production" },
  { id: 2, title: "Brand Commercial", category: "Advertisement" },
  { id: 3, title: "Music Video", category: "Music Video" },
  { id: 4, title: "Event Coverage", category: "Event" },
  { id: 5, title: "Documentary Film", category: "Documentary" },
  { id: 6, title: "Creative Reel", category: "Showreel" },
];

export default function Portfolio() {
  return (
    <>
    <section className="portfolio-page">
      
      {/* HERO */}
      <div className="portfolio-hero">
        <h1>Our Portfolio</h1>
        <p>
          A glimpse into our cinematic journey and creative storytelling.
        </p>
      </div>

      {/* GRID */}
      <div className="portfolio-grid">
        {projects.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <div className="portfolio-image">
              <span>Image</span>
            </div>

            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Work />
    </>
  );
}
