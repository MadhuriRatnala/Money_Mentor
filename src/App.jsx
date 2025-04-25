import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Whychooseus from './components/Whychooseus';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <Navbar />
        <div className="pt-16 relative">
          <Routes>
            <Route path="/" element={
              <div className="relative">
                <div className="bg-gradient-to-tr from-purple-900/50 via-purple-800/50 to-purple-900/50 backdrop-blur-sm">
                  <Home />
                  <div className="bg-gradient-to-b from-purple-800/80 to-purple-900/80">
                    <Whychooseus />
                  </div>
                  <div className="bg-gradient-to-tr from-purple-900/90 to-purple-800/90">
                    <Projects />
                  </div>
                  
                    <Stats />
                 
                  <div className="bg-gradient-to-tr from-purple-900 to-purple-800">
                    <Contact />
                  </div>
                </div>
              </div>
            } />
            <Route path="/why-us" element={<Whychooseus />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;