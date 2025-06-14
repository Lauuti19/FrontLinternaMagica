import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FilesPage from './pages/FilesPage'; // Asegúrate de tener este archivo
import AboutPage from './pages/AboutPage';
import separadorImg from "./assets/tiraabout.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";
import ContactPage from './pages/ContactPage';

function App() {
  useEffect(() => {
    const img = new Image();
    img.src = separadorImg;
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/files" element={<FilesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
