import React,{useState} from "react";
import Slider from "react-slick";
import img1 from "../assets/peceranueva.jpg";
import img2 from "../assets/news/imagen1.jpg";
import img3 from "../assets/news/imagen2.jpg";
import img4 from "../assets/news/imagen3.jpg";
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

const images = [img1, img2, img3, img4];

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
                      Finalizamos con la obra de nuestra última colección "Roque Catania"
                      <br />
                      Disponible a partir del 12 de Junio
                      <br />
                      ¡Pronto más novedades!
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