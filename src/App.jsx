import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { TopNavBar } from './components/TopNavBar';
import { Home } from './pages/Home';
import { About } from './pages/About';



export const App = () => {
  return (
    <Router>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}