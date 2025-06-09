import React from "react";
import FilesViewer from "../components/FilesViewer";
import imgarchivo from "../assets/archivo-digital.png";
import "../styles/FilesPage.css";

const FilesPage = () => (
  <div className="files-page">
    <div className="title-container-files">
      <div></div>
      <div className="title-text">
    <h1>
      Inventario
    </h1>
    <h2>Archivo Digital</h2>
    <p>
      Bienvenido al archivo digital del Museo Linterna Mágica. Aquí encontrarás una colección organizada de imágenes históricas y documentos visuales que forman parte de nuestro patrimonio.
    </p>
    <button className="Button-Ver">Comencemos</button>
    </div>
    
    <div className="title-image">
      <img src={imgarchivo} alt=""/>
    </div>

  </div>
    <h3 className="suggestion"> Al hacer click o tocar cualquier imagen podras acceder a mas informacion</h3>
    <FilesViewer />
  </div>
);

export default FilesPage;