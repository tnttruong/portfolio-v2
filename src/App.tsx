import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/projects/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div><Intro /></div>
      <div id="about"><About/></div>
      <div id="projects"><Project/></div>
      <div id="contact"><Contact/></div>
    </div>
  )
}

export default App;
