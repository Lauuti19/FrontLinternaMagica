import React, { useRef } from "react";
import sampleVideo from "../assets/pruebaguia.mp4"; // Asegúrate de que la ruta sea correcta

const VideoPage = () => {
  const videoRef = useRef(null);

  const handleStart = async () => {
    const video = videoRef.current;
    try {
      await video.requestFullscreen();
      await video.play();
    } catch (err) {
      console.error("No se pudo iniciar el video:", err);
    }

    // Si el usuario sale del fullscreen, cerramos la pestaña (si se puede)
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        window.location.href = "about:blank";
      }
    });
  };

  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <button
        onClick={handleStart}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          zIndex: 2,
        }}
      >
        Tocar para comenzar
      </button>
      <video
        ref={videoRef}
        src={sampleVideo}
        controls
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default VideoPage;
