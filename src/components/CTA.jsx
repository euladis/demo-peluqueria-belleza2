import { CalendarDays, MessageCircle } from "lucide-react";

function CTA() {
  return (
    <section className="cta" id="reserva">
      <div className="cta-container">
        <div className="cta-message">
          <span className="cta-message-icon">
            <CalendarDays size={22} strokeWidth={1.5} />
          </span>

          <div>
            <h3>¿Lista para tu próximo cambio?</h3>
            <p>Reservá tu turno y regalate un momento para vos.</p>
          </div>
        </div>

        <div className="cta-buttons">
          <a href="#contacto" className="btn btn-primary">
            <CalendarDays size={17} />
            Reservar turno
          </a>

          <a
            href="https://wa.me/59800000000"
            className="btn btn-cta-outline"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
