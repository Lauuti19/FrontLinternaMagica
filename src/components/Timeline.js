import React, { useState } from "react";
import {LineaTitle} from "../components/Titles";
import "../styles/Timeline.css"; // Usa tu archivo de estilos, o pon los estilos en el global

const timelineData = {
  "1913": `En el mes de Abril, el Sr. Antonio Liffourrena alquila el salón social de la "Sociedad Italiana" y funda el "Cine 43" dando inicio a un vinculo entre el cine y la institución. El 18 de septiembre el terceto nacional "Gardel, Martino y Razzano" se presenta en la sala "Cine 43" cerrando la gira denominada: "cruzada artistica"`,
  "1914": "Liborio Castagno instala el primer biógrafo del pueblo en el salón social de la Asoc. Italiana. Proyectando cintas mudas que musicalizaba con su piano.",
  "1925": "Debido al crecimiento del cine como fenómeno de masas en el mundo y al éxito de las proyecciones en el buffet, la comisión decide la construcción de la sala de cine-teatro.",
  "1930": "Abre sus puertas la primer sala de cine-teatro de Los Toldos construida por Luis Bertello e hijos, orgullo de la Asoc. Italiana.",
  "1931": "Se inaugura la sala del cine Español, de la Asoc. Española.",
  "1940": "La empresa de distribución cinematográfica Zurro alquila las dos salas de cine y se encarga por más de una década de la administración, equipamiento, programación y proyección.",
  "1952": "En abril la empresa Aldabe e hijos llega a Los Toldos y compra a la empresa Zurro y alquila las salas de cine de la ciudad, continuando con la administración, programación y proyección de las mismas hasta el año 1956.",
  "1956": "Por un breve período los cines pasan a manos de los hermanos Ibarreta.",
  "1958": "Llegan los hermanos Ibarreta y se hacen cargo de las dos salas, continuando con la tradición de administración, programación y proyección.",
  "1971": "Por primera vez la Asoc. Italiana se hace cargo junto a Roberto Nicholson de la administración, programación y proyección hasta el año 1986, cuando tienen que cerrar sus puertas por el auge de las videocaseteras y el apogeo de la TV por cable.",
  "1989": "Cierra definitivamente la sala del cine Español.",
  "1994": "La Asoc. Italiana junto a Mario Espejo reabren el cine juntos. Mario histórico proyectorista de la sala de cine español trae su técnica con la antigua cabina a la sala de cine-teatro de la Asoc. Italiana, funcionando hasta el año 1996.",
  "2007": "Gracias a la gestión de María Lens (vicepresidenta en ese período de I.N.C.A.A.) y Luciano Darienzo junto a la comisión y un grupo de mecenas se realiza la reapertura de la sala Leonardo Favio. Por primera vez la Asoc. Italiana logra tener sus propios equipos con los que Roque Catania se hace cargo de la proyección, técnica y programación.",
  "2015": "Se construye la primer pecera exhibidora para mostrar y poner en valor el proyector de cine (35mm) Victoria IV.",
  "2018": "La sala Leonardo Favio reabre sus puertas totalmente digitalizada gracias al esfuerzo y trabajo de la comisión donado a la comunidad la posibilidad de disfrutar de los estrenos en simultáneo de grandes títulos mundiales y nacionales. Roque Catania continúa con la programación, proyección y técnica en esta nueva etapa digital.",
  "2022": "Abre sus puertas LINTERNA MÁGICA, museo del cine de la Asoc. Italiana."
};

const years = [
  "1913","1914", "1925", "1930", "1931", "1940", "1952", "1956", "1958",
  "1971", "1989", "1994", "2007", "2015", "2018", "2022"
];

const Timeline = () => {
  const [popup, setPopup] = useState({ visible: false, year: null, info: "" });

  const openPopup = (year) => {
    setPopup({
      visible: true,
      year,
      info: timelineData[year] || "No hay información disponible para este año."
    });
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopup({ visible: false, year: null, info: "" });
    document.body.style.overflow = "auto";
  };

  return (
    <>
    <div>
        <LineaTitle />

        <div className="timeline-container film-strip">
            <div className="timeline">
            {years.map((year) => (
                <div
                className="timeline-item"
                key={year}
                data-year={year}
                onClick={() => openPopup(year)}
                tabIndex={0}
                role="button"
                aria-label={`Ver información de ${year}`}
                onKeyDown={e => { if (e.key === "Enter" || e.key === " ") openPopup(year); }}
                >
                {year}
                </div>
            ))}
            </div>
        </div>
        {/* Overlay */}
        <div
            id="popup-overlay"
            className={popup.visible ? "visible" : ""}
            onClick={closePopup}
            style={{
            position: "fixed",
            top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 1500,
            display: popup.visible ? "block" : "none"
            }}
        />
        {/* Popup */}
        <div
            className={`popup${popup.visible ? " visible" : ""}`}
            style={{
            pointerEvents: popup.visible ? "auto" : "none",
            opacity: popup.visible ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
            zIndex: 2000
            }}
            aria-modal="true"
            role="dialog"
        >
            {popup.visible && (
            <>
                <button className="close" onClick={closePopup} aria-label="Cerrar popup">&times;</button>
                <h2>{popup.year}</h2>
                <p>{popup.info}</p>
            </>
            )}
        </div>
      </div>
    </>
  );
};

export default Timeline;