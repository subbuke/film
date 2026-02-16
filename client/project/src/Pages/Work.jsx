import "../Styles/work.css" // create this CSS file
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg"

// Dummy images for now; replace with your real images
const workItems = [
  { id: 1, title: "Project 1", img: work1 },
  { id: 2, title: "Project 2", img: work2 },
  { id: 3, title: "Project 3", img: work3 },
  { id: 4, title: "Project 4", img: work4 },
  { id: 5, title: "Project 5", img: work5 }
];

const Work = () => {
  return (
    <div className="portfolio-page">
      <h2 className="portfolio-title">Our Work</h2>
      <div className="portfolio-grid">
        {workItems.map((item) => (
          <div className="portfolio-item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
