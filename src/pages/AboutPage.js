import React, { useEffect, useState, useRef } from "react";
import "../styles/AboutPage.css";
import separadorImg from '../assets/tiraabout.png';
import iniciosimg from '../assets/inicios.jpg';
import avancesimg from '../assets/avances.jpg';
import pandemiaimg from '../assets/pandemia.jpg';
import renovamosimg from '../assets/renovamos.jpg';
import roqueImg from "../assets/roque.png";
import marioImg from "../assets/MarioEspejo.jpg";
import robertoImg from "../assets/RobertoNicholson.jpg";
import bandera from "../assets/bandera.png";

const AboutPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const sociedadRef = useRef(null);


  useEffect(() => {
    const preload = new Image();
    preload.src = separadorImg;
  }, []);

  const handleOpenModal = (text) => {
    setModalText(text);
    setModalOpen(true);
  };
   const handleSaberMasClick = () => {
    if (sociedadRef.current) {
      sociedadRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about-page">
      <div className="title-container">
        <div className="about-title">
          <h2>Un viaje a través de</h2>
          <h1>nuestra</h1>
          <h1>historia</h1>
          <button onClick={handleSaberMasClick}>Saber Más</button>
          
        </div>
        <div className="img-separador-wrapper">
          <img src={separadorImg} alt="" className="img-separador" />
        </div>
      </div>
      <div className="body-container">
        <div className="Sociedad" ref={sociedadRef}>
           <div className="Imagen-Sociedad">
            <img src={bandera} alt=""></img>
          </div>
          <div className="Texto-Sociedad">
  <h1>Asociación Italiana de Socorros Mutuos de Los Toldos</h1>
  <h2>Desde 1895, construyendo comunidad, cultura e identidad</h2>
  <p>
    Fundada el <strong>7 de julio de 1895</strong> sobre terrenos donados por <strong>Don Elector Urquizo</strong>, la Asociación Italiana de Socorros Mutuos fue la primera institución del partido de <strong>General Viamonte</strong> y de la ciudad de <strong>Los Toldos</strong>.
  </p>
  <p>
    Nació como un espacio de encuentro y apoyo para los inmigrantes italianos, promoviendo la solidaridad, la lengua y la cultura de sus orígenes. A lo largo de los años, amplió su misión incorporando una escuela, una sala de cine-teatro y diversas iniciativas culturales.
  </p>
  <p>
    Hoy continúa su legado, fomentando el desarrollo social, cultural e intelectual de la comunidad a través de:
  </p>
  <ul>
    <li><strong>Sala de cine-teatro digitalizada</strong>, con estrenos nacionales y funciones semanales (jueves a domingo).</li>
    <li><strong>Museo del Cine Linterna Mágica</strong>, que preserva y exhibe más de un siglo de historia cinematográfica local.</li>
    <li><strong>Escuela de Lenguas Dante Alighieri</strong>, con más de 30 años enseñando italiano en Los Toldos.</li>
  </ul>
</div>
        </div>
        <div className="Inicios">
          <div className="Texto-Inicio">
          <h2>Nuestros inicios</h2>
          <h3>La Asociación Italiana, fundada en 1895, celebrará el 7 de julio de 2025 su 130° aniversario. De esos 130 años de trayectoria, 112 han estado íntimame...</h3>
          <button
              className="Button-Ver"
              onClick={() =>
                handleOpenModal(
                  `La Asociación Italiana, fundada en 1895, celebrará el 7 de julio de 2025 su 130° aniversario. De esos 130 años de trayectoria, 112 han estado íntimamente ligados al cine, convirtiendo a la institución en un verdadero emblema cultural de la comunidad.

Las primeras funciones cinematográficas se remontan a 1913, cuando en la sede social se instaló lo que se conoció como el Cine 43. Fue Antonio Lifurena quien, entre las mesas del salón, colocó un biógrafo y comenzó a proyectar películas mudas sobre una tela. Estas proyecciones eran ocasionalmente acompañadas por orquestas o bandas musicales que él mismo convocaba, transformando cada función en un espectáculo integral.`
)
              }
            >
              Ver más
            </button>

          </div>
          <div className="Imagen-Inicio">
            <img src={iniciosimg} alt=""></img>
          </div>
        </div>
        <div className="Avance">
          <div className="Imagen-Avance">
            <img src={avancesimg} alt=""></img>
          </div>
          <div className="Texto-Avance">
          <h2>Avances</h2>
          <h3>Con el crecimiento de la masa societaria y el entusiasmo del público, la actividad cinematográfica continuó su expansión. A Lifurena lo sucedió Liborio Castaño, un talentoso proyector...</h3>
           <button
              className="Button-Ver"
              onClick={() =>
                handleOpenModal(
  `Con el crecimiento de la masa societaria y el entusiasmo del público, la actividad cinematográfica continuó su expansión. A Lifurena lo sucedió Liborio Castaño, un talentoso proyectorista y pianista, quien se encargaba tanto de proyectar como de musicalizar las películas en vivo con su piano.

El impacto de este fenómeno, tanto a nivel local como internacional, llevó a la Sociedad Italiana a tomar una decisión trascendental: construir el primer cineteatro del pueblo. La sala fue inaugurada el 14 de junio de 1930, siendo obra de Luis Bertello e Hijos.

Desde entonces, se inició una rica y continua historia entre la Sociedad Italiana y el cine, atravesando distintas épocas, con diversos empresarios, operadores y técnicos. Este recorrido nos lleva hasta la actualidad, en la antesala del 95° aniversario del Cine Teatro Italiano, que desde el 20 de octubre de 2007 lleva con orgullo el nombre de Sala Leonardo Favio.`
                )
            }
            >
              Ver más
            </button>
          </div>
        </div>
        <div className="Pandemia">
          <div className="Texto-Pandemia">
          <h2>Año 2020/2021</h2>
          <h3>El Origen del Museo Linterna Mágica: Un Proyecto Nacido en Pandemia
Durante el período de la pandemia, la Sala del Cine Teatro Italiano se vio obligada a cerrar sus puertas. Fue uno de los primeros espacios en inter...</h3>
          <button
              className="Button-Ver"
              onClick={() =>
                handleOpenModal(
  `El Origen del Museo Linterna Mágica: Un Proyecto Nacido en Pandemia
Durante el período de la pandemia, la Sala del Cine Teatro Italiano se vio obligada a cerrar sus puertas. Fue uno de los primeros espacios en interrumpir sus actividades y uno de los últimos en reabrir, permaneciendo inactiva durante casi un año.

En ese tiempo de pausa obligada, el proyector digital —pieza clave para el funcionamiento de la sala— requirió mantenimiento semanal, ya que su batería de litio, de gran capacidad, necesita encendidos regulares para conservar su operatividad. De no ser encendido, corre el riesgo de descargarse completamente, quedando inutilizable. Así, incluso sin funciones para el público, el espacio siguió recibiendo cuidados técnicos esenciales.

Fue en ese contexto, marcado por el silencio y la incertidumbre, donde comenzó a tomar forma la idea de crear un museo que rescatara y contara la historia cinematográfica de la institución. El proyecto tuvo su punto de partida simbólico en el antiguo proyector Victoria 4, de fabricación italiana, que había sido utilizado en la sala hasta 2015 y ya había sido exhibido en una de las primeras vitrinas del espacio.

La propuesta fue presentada ante la Comisión Directiva de la Asociación Italiana, junto con un plan que destacaba el valor patrimonial de las piezas, el compromiso institucional necesario para conservarlas y el potencial del museo como espacio de memoria cultural. La Comisión aprobó la iniciativa por unanimidad, comprometiéndose a respaldar su desarrollo y preservación.

Así nació el Museo del Cine Linterna Mágica, en plena pandemia, durante un tiempo difícil marcado por pérdidas personales y colectivas. Su construcción fue un trabajo sostenido, que incluyó la instalación de vitrinas, la adecuación de una sala de exhibición y la recuperación de equipamiento histórico, muchas veces almacenado en depósitos, galpones o viviendas particulares.

Entre los principales aportes, se destacan las colecciones donadas por Roberto Nicholson y Mario Espejo, así como otras piezas de relevancia que fueron sumándose gracias al compromiso de la comunidad. Hoy, el museo cuenta con más de 400 objetos originales que documentan una rica y profunda relación entre el cine y la historia local.`
                )
            }
            >
              Ver más
            </button>

          </div>
          <div className="Imagen-Pandemia">
            <img src={pandemiaimg} alt=""></img>
          </div>
        </div>
        <div className="Renovamos">
          <div className="Imagen-Renovamos">
            <img src={renovamosimg} alt=""></img>
          </div>
          <div className="Texto-Renovamos">
          <h2>Nos renovamos</h2>
          <h3>El Museo Linterna Mágica continúa creciendo. Su última incorporación es la pecera triple, también conocida como Pecera N.º 3, que será oficialmente inaugurada en el marco del 95° anivers...</h3>
          <button
              className="Button-Ver"
              onClick={() =>
                handleOpenModal(
  `El Museo Linterna Mágica continúa creciendo. Su última incorporación es la pecera triple, también conocida como Pecera N.º 3, que será oficialmente inaugurada en el marco del 95° aniversario de la Sala del Cine Teatro Italiano.

El museo está compuesto por una sala principal de exhibición y tres vitrinas —o "peceras"— donde se distribuyen diversas colecciones vinculadas al patrimonio cinematográfico local. En ellas se encuentran piezas pertenecientes a:

La colección de la Asociación Italiana

La colección de Roberto Cocconicolson

La colección de Mario Ochespejo

Y una colección de carácter personal, aportada por quien coordina el museo

Además de esta nueva obra, se han realizado importantes mejoras en el hall de entrada y en la sala principal, incluyendo la pintura completa del hall y la renovación de la luminaria, tanto en los espacios comunes como en la sala. Particularmente, se instaló una nueva luminaria dimerizable, lo cual era una necesidad pendiente desde hacía tiempo.

Estas mejoras fueron posibles gracias al valioso aporte de la Cooperativa Eléctrica, que donó gentilmente los spots, el sistema de regulación (dimer) y realizó los trabajos eléctricos necesarios para su conexión e instalación.

Gracias a este esfuerzo conjunto, hoy la sala luce y funciona como siempre la soñamos.`
                )
            }
            >
              Ver más
            </button>

          </div>
        </div>
        <div>

<div className="Contribuyentes">
  <h1>Nuestros Contribuyentes</h1>
  <div className="Contribuyentes-Container">
    <article className="Contribuyente">
      <img src={roqueImg} alt="Roque Catania" />
      <h2>Roque Catania</h2>
      <p>
        Realizador audiovisual, documentalista y operador técnico de cine. Desde 2007 trabaja en la Sala Leonardo Favio, donde comenzó como proyectorista de 35 mm y desde 2018 proyecta en cine digital. <br /><br />
        Es autor de cortos y tres largometrajes, entre ellos <em>El Trovador Siempre Vuelve</em>, seleccionado en BAFICI y Mar del Plata. Es también el creador del Museo del Cine Linterna Mágica, que rescata 112 años de historia cinematográfica de la Asociación Italiana.
      </p>
    </article>

    <article className="Contribuyente">
      <img src={robertoImg} alt="Roberto Nicholson" />
      <h2>Roberto Nicholson</h2>
      <p>
        Operador y técnico de proyectores de 35 mm. Participó en dos etapas: como ayudante desde los 12 años y luego, entre 1971 y 1986, como operador y socio activo. <br /><br />
        Su colección incluye máquinas, metrajes y cartelería, reflejo de su dedicación y meticulosidad como técnico, garantizando siempre funciones de alta calidad.
      </p>
    </article>

    <article className="Contribuyente">
      <img src={marioImg} alt="Mario Espejo" />
      <h2>Mario Espejo</h2>
      <p>
        Inició su formación en el Cine Español de Mercedes en 1957. En 1962 asumió como operador del Cine Italiano en Los Toldos, reemplazando a Roberto Nicholson. Finalizó su carrera en los 90 como socio de la Asociación Italiana. <br /><br />
        Recordado por su elegancia y cercanía con el público, su colección incluye proyectores Phillips de 35 mm, un proyector de 16 mm, lentes y lámparas.
      </p>
    </article>
  </div>
</div>
        </div>
      </div>
{/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setModalOpen(false)}>
              X
            </button>
            <p>{modalText}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default AboutPage;