import React, { useState } from "react"; // ✅ asegurate que esté importado
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from "../assets/news/coleccionnueva.png";
import img2 from "../assets/news/imagen1.jpg";
import img3 from "../assets/news/alumnos.png";
import img4 from "../assets/news/piano1.jpg";
import img5 from "../assets/news/piano2.jpg";
import img6 from "../assets/news/ultimanew.jpeg";
import img7 from "../assets/news/ultimanew2.jpeg";

import "../styles/News.css";


const slides = [
  {
    title: "Nueva Adquisición",
    caption: `El director del largometraje "Desierto Negro" Gaspar Scheuer deja en custodia a Roque Catania y al Museo Linterna Mágica 5 latas de la copia N°1 en 35mm...`,
    images: [img6, img7,],
  },
  {
    title: "Nueva colección",
    caption: "Finalizamos con la obra de nuestra última colección 'Roque Catania'...",
    images: [img1, img2],
  },
  {
    title: "Visita especial",
    caption: "Recibimos la visita de los estudiantes del Colegio San José...",
    images: [img3],
  },
  {
    title: "Enorme donación",
    caption: `Agradecemos profundamente la donación de este piano a Rodrigo Nievas Danty "Mister Elio"...`,
    images: [img4, img5],
  },
];

const News = () => {

  
const [expandedImg, setExpandedImg] = useState(null);
const closeExpanded = () => setExpandedImg(null);

  return (
    <section className="news-section" aria-label="Novedades">
      <div className="Textos-Noticias-Title">
        <h2>Novedades</h2>
        <button className="Button-Ver">Descubrir más</button>
      </div>

      <Swiper
        aria-live="polite"
        modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        keyboard={{ enabled: true }}
        className="news-swiper"
      >
        {slides.flatMap((slide, i) =>
          slide.images.map((img, idx) => (
            <SwiperSlide
              key={`${i}-${idx}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slide.title}, slide ${i + 1}.${idx + 1} de ${slides.length}`}
            >
              <div className="slide-content">
                <div className="slide-title">
                  <h3>{slide.title}</h3>
                </div>
                <figure className="slide-figure">
                  <img
                    src={img}
                    alt={slide.title}
                    loading="lazy"
                    onClick={() => setExpandedImg(img)}
                  />

                  
                </figure>
                <figcaption className="Caption-Text">{slide.caption}</figcaption>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
        {expandedImg && (
          <div className="img-modal" onClick={closeExpanded}>
            <img src={expandedImg} alt="Imagen ampliada" />
          </div>
        )}

    </section>
  );
};

export default News;
