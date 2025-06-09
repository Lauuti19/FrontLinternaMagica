import React from "react";
//import "../styles/HomePage.css"; // Asegúrate de tener los estilos necesarios
import News from "../components/News";
import Timeline from "../components/Timeline";
import Videos from "../components/Videos";
import Welcome from "../components/Welcome";

const HomePage = () => {
    return (
        <div className="HomePage">
        <Welcome />
        <News />
        <Timeline />
        <Videos />
        </div>
    );
    }
export default HomePage;