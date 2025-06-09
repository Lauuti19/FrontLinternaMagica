import React from "react";
import "../styles/Titles.css"; // Asegúrate de tener los estilos necesarios
const LineaTitle = () => {
    return (
        <div className="Textos-Linea">
            <h2>Tenemos Historia </h2>
            <div className="items-linea">
                <div className="item-linea">
                    <h3>+100 años</h3>
                    <p>Contamos con mas de 130 años de historia como parte de la Sociedad Italiana. El 7 de julio de 1895 fue fundada, en la cual 112 años hubo cine</p>
                </div>
                                <div className="item-linea">
                    <h3>Museo vivo</h3>
                    <p>
                        Somos un museo que acompaña la historia de nuestro cine, el cual persiste más vivo que nunca. No solo conservamos objetos y recuerdos, sino que también promovemos actividades, visitas guiadas y talleres que acercan la experiencia cinematográfica a personas de todas las edades.
                    </p>
                </div>
                <div className="item-linea">
                    <h3>Patrimonio Cultural</h3>
                    <p>Declárese de interés Histórico - Artístico y Patrimonio Cultural de Gral. Viamonte al Cine y Teatro Italiano "Sala Leonardo Favio" mediante la ordenanza N°3.107/2015 sancionada por el Honorable Concejo Deliberante de Gral. Viamonte y promulgada a traves del Decreto N°353/2015 por el Departamento Ejecutivo Municipal</p>
                </div>
            </div>
            <h1>Línea de Tiempo</h1>
            <p>Haciendo click o tocando sobre cada año podras obtener mas información</p>
        </div>
    );
    }

const AhoraTitle = () => {
    return (
        <div className="Textos-Recorrido">
            <h2>Nuestra Actualidad</h2>
            <h3 id="Texto-Recorrido">
                Tras recorrer los momentos más destacados de nuestra historia, te invitamos a descubrir el presente del Museo Linterna Mágica. Hoy, este espacio sigue creciendo gracias al compromiso de la comunidad y la pasión de quienes lo mantienen vivo.<br /><br />
                Gracias a la visión de Roque Catania, fundador y proyectorista, podés disfrutar de una visita guiada virtual única. A través de videos y testimonios, conocerás nuestras colecciones principales, los objetos históricos y las anécdotas que hacen de este museo un lugar especial.<br /><br />
                Sumate a esta experiencia y reviví la magia del cine, explorando cómo seguimos preservando y compartiendo nuestra identidad cultural con nuevas generaciones.
            </h3>
            <h1 id="Frase"><p>"</p>Si hay memoria!<p>,</p> !hay futuro<p>"</p></h1>
        </div>
    );
    }
export { LineaTitle, AhoraTitle };