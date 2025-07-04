import React from "react";
import "../styles/PageLoader.css";
import Logo from "../assets/Logo blanco.png";

const PageLoader = () => (
  <div className="page-loader-bg">
    <div
      className="page-loader-logo"
      style={{
        WebkitMaskImage: `url(${Logo})`,
        maskImage: `url(${Logo})`,
      }}
    >
      {/* El div vacío se rellena con el gradiente animado */}
    </div>
  </div>
);

export default PageLoader;