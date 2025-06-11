import React,{ useRef } from "react";
import FilesViewer from "../components/FilesViewer";
import imgarchivo from "../assets/archivo-digital.png";
import "../styles/FilesPage.css";


const FilesPage = () => {
  const fileRef = useRef(null);

const handleComenzarClick = () => {
    if (fileRef.current) {
      fileRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return(
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
    <button className="Button-Ver" onClick={handleComenzarClick}>Comencemos</button>
    </div>
    
    <div className="title-image">
      <img src={imgarchivo} alt=""/>
    </div>

  </div>
    <h3 className="suggestion"> Al hacer click o tocar cualquier imagen podras acceder a mas informacion</h3>
    <div ref={fileRef}><FilesViewer/></div>
  </div>
  )
};

export default FilesPage;