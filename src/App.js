import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./components/fontAwesome";
import Home from './pages/Home';
import News from './pages/News';


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
