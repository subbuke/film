import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Videos from "./Pages/Videos";

function App() {
  return (
    <div className="bg-darkbg min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
      <About />
      <Portfolio />
      <Contact />
      <Videos />
    </div>
  );
}

export default App;
