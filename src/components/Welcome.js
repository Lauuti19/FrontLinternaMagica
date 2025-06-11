import '../styles/Welcome.css';
import vidfondo from "../assets/reemplazo.mp4";

const Welcome = () => {
    
    return (
        <div className="welcome-container">
            <video autoPlay muted loop id="video-background-welcome">
                      <source src={vidfondo} type="video/mp4" />
                      Tu navegador no soporta el video.
                    </video>
        </div>
    );
}

export default Welcome;