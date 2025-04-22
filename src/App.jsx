import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Whychooseus from './components/Whychooseus';
import Projects from './components/Projects';
import Stats from './components/stats';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Whychooseus />
                <Projects />
                <Stats />
                <Contact />
              </>
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