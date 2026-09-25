import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";
 
const habilidades = ["HTML", "CSS", "JavaScript", "React", "Git/GitHub"];
 
function App() {
  return (
    <div className="app">
      <Header
        nombre="Matías Andjel"
        profesion="Estudiante de Programacion"
      />
      <Hero />
      <About />
      <Skills habilidades={habilidades} />
      <Projects />
      <Footer />
    </div>
  );
}
 
export default App;
 