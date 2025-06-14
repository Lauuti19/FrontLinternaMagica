import React from "react";
import { AhoraTitle } from "./Titles";
import "../styles/Videos.css"; 
import video1 from '../assets/pecera1video.mp4';
import video2 from '../assets/pecera2video.mp4';
import video3 from '../assets/pecera3video.mp4';
import video4 from '../assets/video4peceraa.mp4';

const Videos = () => {
    return (
        <div className="Info-Recorrido">
        <AhoraTitle />
        <div className="Transicion-Videos"></div>
        <div className="Titulo-Visita">
        <h1 id="Titulo-Visita">Visita Virtual</h1>
        </div>
        <div className="Presentacion-Visita">
            <h3>En esta sección te invitamos a realizar una visita guiada virtual por el Museo Linterna Mágica. A través de una serie de videos, podrás recorrer las distintas etapas de nuestra historia y descubrir cómo el cine ha formado parte de la vida cultural de Los Toldos de la mano de nuestro proyectorista y creador del museo Roque Catania</h3>
            <h3>A lo largo del recorrido, encontrarás información detallada sobre los hitos más importantes, anécdotas, objetos históricos y el camino recorrido hasta la creación del museo.</h3>

        </div>
        <div class="Contenedor-Guias">
        <div class="Videos">
            <h2>1. Colección Asoc. Italiana</h2>
            <video src={video1} type="video/mp4" controls></video>
        </div>
        <div class="Videos">
            <h2>2. Colección Roberto Nicholson</h2>
            <video src={video2} type="video/mp4" controls></video>
        </div>
        <div class="Videos">
            <h2>3. Colección Roque Catania</h2>
            <video src={video3} type="video/mp4" controls></video>
        </div>
        <div class="Videos">
            <h2>4. Colección Mario Espejo - Sala de Muestras</h2>
            <video src={video4} type="video/mp4" controls></video>
        </div>
        </div>
        </div>
    );
    }
export default Videos;