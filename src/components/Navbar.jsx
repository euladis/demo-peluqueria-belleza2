import { Menu, X, CalendarDays, MessageCircle, Scissors } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-icon">
            <Scissors size={22} strokeWidth={1.4} />
          </span>

          <span className="navbar-logo-text">
            <span>ÉLAN</span>
            <small>PELUQUERÍA &amp; BELLEZA</small>
          </span>
        </a>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <div className="navbar-links">
            <a href="#inicio" onClick={closeMenu}>
              Inicio
            </a>

            <a href="#servicios" onClick={closeMenu}>
              Servicios
            </a>

            <a href="#nosotros" onClick={closeMenu}>
              Sobre nosotros
            </a>

            <a href="#galeria" onClick={closeMenu}>
              Galería
            </a>

            <a href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
          </div>

          <div className="navbar-actions">
            <a href="#reserva" className="btn btn-primary" onClick={closeMenu}>
              <CalendarDays size={16} />
              Reservar turno
            </a>

            <a
              href="https://wa.me/59800000000"
              className="icon-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              onClick={closeMenu}
            >
              <MessageCircle size={17} />
            </a>
          </div>
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
