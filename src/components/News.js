import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "../assets/news/coleccionnueva.png";
import img2 from "../assets/news/imagen1.jpg";
import img3 from "../assets/news/alumnos.png";
import img4 from "../assets/news/piano1.jpg";
import img5 from "../assets/news/piano2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/News.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const slides = [
  {
    title: "Tenemos nueva colección",
    caption:
      "Finalizamos con la obra de nuestra última colección 'Roque Catania'. Disponible dentro de nuestra sala de cine Leonardo Favio",
    images: [img1],
  },
  {
    title: "Tenemos nueva colección",
    caption:
      "Finalizamos con la obra de nuestra última colección 'Roque Catania'. Disponible dentro de nuestra sala de cine Leonardo Favio",
    images: [img2],
  },
  {
    title: "Visita guiada especial",
    caption:
      "Entre las recientes visitas recibimos la compañia de los estudiantes de secundaria del Colegio San José. ¡Gracias por visitarnos!",
    images: [img3], // 2 imágenes para este slide
  },
  {
    title: "Enorme donación",
    caption:
      `Estamos profundamente agradecidos con la donacion de este piano por Rodrigo Nievas Danty "Mister Elio" `,
    images: [img4],
  },
  {
    title: "Enorme donación",
    caption:
      `Estamos profundamente agradecidos con la donacion de este piano por Rodrigo Nievas Danty "Mister Elio" `,
    images: [img5],
  },
];

const News = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (src) => setModalImg(src);
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalImg(null);
    }
  };

  return (
    <div className="Textos-Noticias">
      <div className="Textos-Noticias-Title">
        <h2>Novedades</h2>
        <button className="Button-Ver">Descubrir más</button>
      </div>
      <div className="Contenido-Novedades">
        <div className="slider-container">
          <Slider {...settings}>
            {slides.map((slide, i) => (
              <div key={i} className="slide">
                <div className="slide-overlay">
                  <div className="slide-text">
                    <h4>{slide.title}</h4>
                  </div>
                </div>
                <div className="slide-images-group">
                  {slide.images.map((img, idx) => (
                    <div key={idx} className="slide-img-wrapper">
                      <img
                        src={img}
                        alt={`slide ${i + 1} imagen ${idx + 1}`}
                        className="imagen-map"
                        onClick={() => openModal(img)}
                      />
                      <div className="slide-caption">{slide.caption}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {modalImg && (
        <div className="files-modal-overlay" onClick={closeModal}>
          <div className="files-modal-content">
            <img src={modalImg} alt="Ampliado" className="files-modal-img" />
            {/* Si quieres, puedes poner un título aquí */}
            <button className="files-modal-close" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;