import { MessageCircle, MapPin, Clock3, Scissors, Heart } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.6c0-.3.2-.4.5-.4Z" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-logo">
            <Scissors size={20} strokeWidth={1.4} />

            <span className="footer-logo-text">
              <span>ÉLAN</span>
              <small>PELUQUERÍA &amp; BELLEZA</small>
            </span>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>

            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>

            <a href="https://wa.me/59800000000" aria-label="WhatsApp">
              <MessageCircle size={17} strokeWidth={1.6} />
            </a>
          </div>

          <div className="footer-info">
            <div className="footer-info-item">
              <MapPin size={17} strokeWidth={1.5} />
              <span>
                <strong>Av. Italia 1234</strong>
                Montevideo
              </span>
            </div>

            <div className="footer-info-item">
              <Clock3 size={17} strokeWidth={1.5} />
              <span>
                <strong>Lun a Sáb · 9:00 – 19:00</strong>
                Dom. Cerrado
              </span>
            </div>
          </div>

          <div className="footer-script script">
            Tu belleza
            <br />
            es única <Heart size={14} style={{ display: "inline", verticalAlign: "-1px" }} />
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 ÉLAN Peluquería &amp; Belleza. Todos los derechos reservados. · Demo comercial
        </div>
      </div>
    </footer>
  );
}

export default Footer;
