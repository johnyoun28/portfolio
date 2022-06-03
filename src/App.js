import { useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'


function App() {

  useEffect(()=> {
    Aos.init({duration:2000})
  },[])

  return (
    <div className="App">
    <NavBar />
    <About />
    <div data-aos='fade-left'>
    <Projects />
    </div>
    <div data-aos='fade-right'>
      <Skills />
    </div>
    <Contact />
    </div>
  );
}

export default App;
