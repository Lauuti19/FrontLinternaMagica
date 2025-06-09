import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import vidHeader from "../assets/header.mp4";
import Logo from "../assets/Logo blanco.png";

const Header = () => {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const manualScrollTriggered = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (manualScrollTriggered.current) return;

      if (scrollY === 0) {
        headerRef.current.classList.remove("scrolled");
        setScrolled(false);
        document.body.style.overflow = "hidden";
      } else if (scrollY > 100) {
        headerRef.current.classList.add("scrolled");
        setScrolled(true);
        document.body.style.overflow = "auto";
      }
    };

    const mobile = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);

    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleStartClick = () => {
    manualScrollTriggered.current = true;

    window.scrollTo({
      top:0,
      behavior: "smooth",
    });

    setTimeout(() => {
      document.body.style.overflow = "auto";
      setScrolled(true);
      headerRef.current.classList.add("scrolled");
      manualScrollTriggered.current = false;
    }, 150);
  };

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`} ref={headerRef}>
      <video autoPlay muted loop id="video-background">
        <source src={vidHeader} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Logo grande centrado */}
      <div className={`logo-main ${scrolled ? "fade-out" : "fade-in"}`}>
        <img src={Logo} alt="Logo-blanco" />
      </div>

      {/* Logo pequeño fijo en header */}
      <Link to="/" className={`logo-small ${scrolled ? "visible" : ""}`}>
        <img src={Logo} alt="Logo-blanco" />
      </Link>

      {!scrolled && (
        <button className="start-btn" onClick={handleStartClick}>
          {isMobile ? "Toca aquí para comenzar" : "Haz clic aquí para comenzar"}
        </button>
      )}

      {scrolled && (
        <nav className="nav-links visible">
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/files">Inventario</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
      )}
    </div>
  );
};

export default Header;
