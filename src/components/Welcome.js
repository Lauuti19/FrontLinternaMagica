import '../styles/Welcome.css';
import vidPrueba from "../assets/0606(1).mp4";

const Welcome = () => {
    
    return (
        <div className="welcome-container">
            <video autoPlay muted loop id="video-background-welcome">
                      <source src={vidPrueba} type="video/mp4" />
                      Tu navegador no soporta el video.
                    </video>
            <div className="welcome-text">
            <h2>Bienvenido a nuestro museo</h2>
            <h1>Linterna Mágica</h1>
            </div>
        </div>
    );
}

export default Welcome;