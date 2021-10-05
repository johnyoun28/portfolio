import './App.css';
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
function App() {
  return (
    <div className="App">
    <NavBar />
    <About />
    <Projects />
    <Skills />
    <Contact />
    </div>
  );
}

export default App;
