import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Welcome from './pages/WelcomePage/Welcome'
import About from './pages/AboutMe/AboutMe'
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Header/>
        <Welcome /> 
        <About />
        <Footer/>
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
