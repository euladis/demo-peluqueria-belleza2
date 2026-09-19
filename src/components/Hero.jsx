import { ChevronLeft, ChevronRight, CalendarDays, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "Tu belleza, nuestra pasión",
    title: "Realzá lo mejor de vos",
    text: "Cuidamos de tu cabello, tu piel y tu bienestar con los mejores productos y un equipo de profesionales apasionadas por la belleza.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586266195531-76cfa365cb43?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "Color con personalidad",
    title: "Un color que te representa",
    text: "Técnicas de coloración a medida para que cada visita se convierta en tu mejor versión.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "Un espacio para vos",
    title: "Momentos que te renuevan",
    text: "Desconectate del afuera y disfrutá de una experiencia de belleza pensada en cada detalle.",
  },
];

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setActive((index + slides.length) % slides.length);

  return (
    <section className="hero" id="inicio">
      {slides.map((slide, index) => (
        <div
          className={`hero-slide ${index === active ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          key={slide.title}
        />
      ))}

      <div className="hero-overlay"></div>

      <button
        className="hero-arrow hero-arrow-prev"
        onClick={() => goTo(active - 1)}
        aria-label="Anterior"
      >
        <ChevronLeft size={26} strokeWidth={1.5} />
      </button>

      <button
        className="hero-arrow hero-arrow-next"
        onClick={() => goTo(active + 1)}
        aria-label="Siguiente"
      >
        <ChevronRight size={26} strokeWidth={1.5} />
      </button>

      <div className="hero-content">
        <span className="hero-eyebrow">{slides[active].eyebrow}</span>

        <h1>{slides[active].title}</h1>

        <p>{slides[active].text}</p>

        <div className="hero-buttons">
          <a href="#reserva" className="btn btn-primary">
            <CalendarDays size={18} />
            Reservar turno
          </a>

          <a href="#servicios" className="btn btn-outline">
            Conocé nuestros servicios
          </a>
        </div>
      </div>

      <div className="hero-script script">
        Cabello sano
        <br />
        Piel radiante
        <br />
        Vos, siempre
        <Heart size={16} style={{ marginLeft: "auto" }} />
      </div>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            className={`hero-dot ${index === active ? "active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
