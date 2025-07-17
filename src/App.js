import React, { useState, useEffect } from "react";
import PageLoader from "./components/PageLoader";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FilesPage from './pages/FilesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Agrega aquí tus videos e imágenes
const videoUrls = [
  require("./assets/header.mp4"),
  require("./assets/reemplazo.mp4"),
];
const imageUrls = [
  require("./assets/tiraabout.png"),
  require("./assets/news/coleccionnueva.png")
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const total = videoUrls.length + imageUrls.length;
    if (total === 0) {
      setLoading(false);
      return;
    }
    let loaded = 0;
    const checkLoaded = () => {
      loaded++;
      if (loaded === total) setLoading(false);
    };

    videoUrls.forEach(url => {
      const vid = document.createElement("video");
      vid.src = url;
      vid.preload = "auto";
      vid.oncanplaythrough = checkLoaded;
      vid.onerror = checkLoaded;
    });

    imageUrls.forEach(url => {
      const img = new window.Image();
      img.src = url;
      img.onload = checkLoaded;
      img.onerror = checkLoaded;
    });
  }, []);

  return (
    <Router>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/files" element={<FilesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;