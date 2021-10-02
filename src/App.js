import './App.css';
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills'

function App() {
  return (
    <div className="App">
    <NavBar />
    <About />
    <Projects />
    <Skills />
    </div>
  );
}

export default App;
