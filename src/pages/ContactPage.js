import React from "react";
import "../styles/ContactPage.css";

const ContactPage = () => (
  <div className="contact-page">
    <h1 className="contact-title">Contactanos</h1>
    <div className="contact-content">
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-label">Facebook:</span>
          <a
            href="https://www.facebook.com/roque.catania.7/videos_by?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roque Catania
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Teléfono:</span>
          <a href="tel:+5492358421346">+54 9 2358 421346</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Correo:</span>
          <a href="mailto:chinokatania@hotmail.com">chinokatania@hotmail.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Instagram:</span>
          <span className="contact-soon">Próximamente</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">Ubicación:</span>
          <span>Sede social de la Sociedad Italiana (Mitre 841)</span>
        </div>
      </div>
      <div className="contact-map">
        {/* Reemplaza el src por el de tu Google Maps */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.2575365601874!2d-61.037517699999995!3d-35.0002578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf4b5cee80b1b3%3A0xf6d9653ccd22a28e!2sCine%20Teatro%20Italiano!5e0!3m2!1ses!2sar!4v1749499159788!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
);

export default ContactPage;