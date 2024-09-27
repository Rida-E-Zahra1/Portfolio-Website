import React from 'react';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">

      <ParticlesBackground />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
