import React from "react";
import "../styles/PageLoader.css";
import "../styles/FilesViewer.css"; // Asegúrate de importar el CSS del loader
import Logo from "../assets/Logo blanco.png";

const PageLoader = () => (
  <div className="page-loader-bg">
    <div
      className="page-loader-logo"
      style={{
        WebkitMaskImage: `url(${Logo})`,
        maskImage: `url(${Logo})`,
      }}
    />
    <div className="files-loader" style={{ marginTop: 32 }}>
      <div className="loader-spinner" id="spinner-loader"></div>
      <span>Cargando...</span>
    </div>
  </div>
);

export default PageLoader;