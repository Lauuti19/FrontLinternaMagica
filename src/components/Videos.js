import React from "react";
import { AhoraTitle } from "./Titles";
import "../styles/Videos.css"; // Asegúrate de tener los estilos necesarios
//import exVideo from "../assets/pruebaguia.mp4";
import proximoVideo from "../assets/proximamente-vids.png";

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
            <img src={proximoVideo} alt=""></img>
        </div>
        <div class="Videos">
            <h2>2. Coleccion Roberto Nicholson</h2>
            <img src={proximoVideo} alt=""></img>
        </div>
        <div class="Videos">
            <h2>3. Colección Mario Espejo</h2>
            <img src={proximoVideo} alt=""></img>
        </div>
        </div>
        </div>
    );
    }
export default Videos;