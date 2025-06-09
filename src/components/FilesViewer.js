import React, { useState } from "react";
import p1img1 from '../assets/Archivo/pecera1/p1img1.jpg';
import p1img2 from '../assets/Archivo/pecera1/p1img2.jpg';
import p1img3 from '../assets/Archivo/pecera1/p1img3.jpg';
import p1img4 from '../assets/Archivo/pecera1/p1img4.jpg';
import p1img5 from '../assets/Archivo/pecera1/p1img5.jpg';
import p2img1 from '../assets/Archivo/pecera2/p2img1.jpg';
import p2img2 from '../assets/Archivo/pecera2/p2img2.jpg';
import p2img3 from '../assets/Archivo/pecera2/p2img3.jpg';
import p2img4 from '../assets/Archivo/pecera2/p2img4.jpg';
import p2img5 from '../assets/Archivo/pecera2/p2img5.jpg';
import p2img6 from '../assets/Archivo/pecera2/p2img6.jpg';
import p3img1 from '../assets/Archivo/pecera3/p3img1.jpg';
import p3img2 from '../assets/Archivo/pecera3/p3img2.jpg';
import p3img3 from '../assets/Archivo/pecera3/p3img3.jpg';
import p3img4 from '../assets/Archivo/pecera3/p3img4.jpg';
import p3img5 from '../assets/Archivo/pecera3/p3img5.jpg';
import p3img6 from '../assets/Archivo/pecera3/p3img6.jpg';
import p3img7 from '../assets/Archivo/pecera3/p3img7.jpg';
import p3img8 from '../assets/Archivo/pecera3/p3img8.jpg';
import p3img9 from '../assets/Archivo/pecera3/p3img9.jpg';
import p3img10 from '../assets/Archivo/pecera3/p3img10.jpg';
import p3img11 from '../assets/Archivo/pecera3/p3img11.jpg';
import p3img12 from '../assets/Archivo/pecera3/p3img12.jpg';
import p3img13 from '../assets/Archivo/pecera3/p3img13.jpg';
import p3img14 from '../assets/Archivo/pecera3/p3img14.jpg';
import p3img15 from '../assets/Archivo/pecera3/p3img15.jpg';
import p3img16 from '../assets/Archivo/pecera3/p3img16.jpg';
import p3img17 from '../assets/Archivo/pecera3/p3img17.jpg';
import "../styles/FilesViewer.css";

const coleccion1 = [
  { src: p1img1, name: "Proyector 35 mm victoria IV - Milán, Italia" },
  { src: p1img2, name: "Torre de carga con carretes" },
  { src: p1img3, name: "Rectificador XeTRON - U.S.A, Nueva Jersey" },
  { src: p1img4, name: "Dos rollos de celuloide 35 mm trailers" },
  { src: p1img5, name: "Banqueta de cabina de proyección desde 2007 a 2015" }
];
const coleccion2 = [
  { src: p2img1, name: "Proyector de cine 35 mm Kalee - Origen ingles Linterna Philips" },
  { src: p2img2, name: "Proyector 16 mm Enorkin Origen Español" },
  { src: p2img3, name: "Camara filmadora 16 mm Bolex Origen Suiza" },
  { src: p2img4, name: "Dos latas material 16 mm" },
  { src: p2img5, name: "Una lata metraje inflamable" },
  { src: p2img6, name: "Lote compuesto x 5 latas de trailer y noticieros" }
];
const coleccion3 = [
  { src: p3img1, name: "Lentes: Panorámico, scope y anamorfico" },
  { src: p3img2, name: "Ruberg. Proyector de 16 mm. No sonoro ( mudo )" },
  { src: p3img3, name: "Proyector super 8, IMAC - Milan, Italia" },
  { src: p3img4, name: "Proyector (16mm.) MICRON 25 (súper) MICROTECNICA - Torino, Italia." },
  { src: p3img5, name: "Camara filmadora súper 8, PICTURE AMERICAN in color XL 503" },
  { src: p3img6, name: "Carrete proyector de 16mm." },
  { src: p3img7, name: "Jaxlight(lector de sonido digital)" },
  { src: p3img8, name: "Fuente y cable sonido digital" },
  { src: p3img9, name: "Procesador de audio digital, SMART CINEMA." },
  { src: p3img10, name: "Rollo dibujo animado( 16mm.)" },
  { src: p3img11, name: "Rollo (8mm.)" },
  { src: p3img12, name: "Proyector Golstar donado por: Ruben Petrucci" },
  { src: p3img13, name: "Cine Graf donado por: Susana Larrinaga y Flia." },
  { src: p3img14, name: "Lata ( 16mm.)" },
  { src: p3img15, name: "Lámparas de imagen y proyector(16mm.)" },
  { src: p3img16, name: "Butacas originales sala de cine" },
  { src: p3img17, name: "Enrolladora" }
];
const coleccion4 = [
  
];

const renderCollection = (title, images, openIndex, setOpenIndex, offset) => (
  <div className="files-collection">
    <h2 className="files-collection-title">{title}</h2>
    {images.length === 0 ? (
      <div className="files-coming-soon">Próximamente</div>
    ) : (
      <div className="files-grid">
        {images.map((img, i) => {
          const idx = offset + i;
          const isOpen = openIndex === idx;
          return (
            <div
              className={`file-item${isOpen ? " open" : ""}`}
              key={idx}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              tabIndex={0}
              role="button"
              aria-label={img.name}
              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setOpenIndex(isOpen ? null : idx); }}
            >
              <img src={img.src} alt={img.name} className="file-img" />
              {isOpen && <div className="file-name">{img.name}</div>}
            </div>
          );
        })}
      </div>
    )}
  </div>
);

const FilesViewer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Calcula los offsets para cada colección
  const offset1 = 0;
  const offset2 = offset1 + coleccion1.length;
  const offset3 = offset2 + coleccion2.length;
  const offset4 = offset3 + coleccion3.length;

  return (
    <div className="files-viewer">
      {renderCollection("Pecera N°1", coleccion1, openIndex, setOpenIndex, offset1)}
      {renderCollection("Pecera N°2 Coleccion Roberto Nicholson", coleccion2, openIndex, setOpenIndex, offset2)}
      {renderCollection("Pecera N°3 Coleccion Mario Espejo y sala de muestras", coleccion3, openIndex, setOpenIndex, offset3)}
      {renderCollection("Pecera N°4", coleccion4, openIndex, setOpenIndex, offset4)}
    </div>
  );
};

export default FilesViewer;