import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Services from "./components/services/Services"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
