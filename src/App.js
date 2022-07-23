import React, {useRef} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import {TweenMax, Power3 } from 'gsap';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
