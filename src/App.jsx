import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import './styles/global.css';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <div className="app">
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
        
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </div>
    </Router>
  );
};

export default App;
