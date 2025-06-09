import React,{useState} from "react";
import Slider from "react-slick";
import img1 from "../assets/peceranueva.jpg";
import img2 from "../assets/imagen2.jpeg";
import img3 from "../assets/imagen3.jpeg";
import img4 from "../assets/imagen4.jpeg";
import img5 from "../assets/imagen5.jpeg";
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

const images = [img1, img2, img3, img4, img5];

const News = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = src => setModalImg(src);
  const closeModal = e => {
    if (e.target.className === "modal-overlay" || e.target.className === "modal-close") {
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
            {images.map((img, i) => (
              <div key={i} className="slide">
                <div className="slide-overlay">
                  <div className="slide-text">
                    <h4>Tenemos nueva colección</h4>
                    <p>
                      Estamos finalizando con la construcción de una nueva pecera para sumar una nueva colección… ¡Pronto más novedades!
                    </p>
                  </div>
                </div>
                <img
                  src={img}
                  alt={`imagen ${i + 1}`}
                  className="imagen-map"
                  onClick={() => openModal(img)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {modalImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImg} alt="Ampliado" />
            <button className="modal-close" onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;