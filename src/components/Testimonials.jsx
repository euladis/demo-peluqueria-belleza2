import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "Excelente atención, muy profesionales y el resultado fue increíble. ¡Volveré sin dudarlo!",
    name: "María Fernández",
    service: "Coloración",
  },
  {
    text: "Me sentí muy cómoda, el ambiente es hermoso y el trato de todas es espectacular.",
    name: "Laura Rodríguez",
    service: "Corte & peinado",
  },
  {
    text: "Siempre salgo muy conforme. Los productos son de primera y el equipo es un amor.",
    name: "Carolina Silva",
    service: "Beauty",
  },
  {
    text: "Un lugar donde realmente podés tomarte un momento para vos. Volvería mil veces.",
    name: "Sofía Méndez",
    service: "Tratamiento facial",
  },
  {
    text: "La atención personalizada se nota desde que entrás. Salí encantada con mi color nuevo.",
    name: "Valeria Gómez",
    service: "Coloración",
  },
];

function Testimonials() {
  const [start, setStart] = useState(0);
  const visible = 3;

  const next = () => setStart((current) => (current + 1) % testimonials.length);
  const prev = () =>
    setStart((current) => (current - 1 + testimonials.length) % testimonials.length);

  const shown = Array.from(
    { length: visible },
    (_, i) => testimonials[(start + i) % testimonials.length]
  );

  return (
    <section className="testimonials section">
      <div className="section-container">
        <div className="testimonial-intro">
          <span className="section-label">Lo que dicen nuestras clientas</span>

          <h2>Tu satisfacción es nuestra mayor recompensa</h2>
        </div>

        <div className="testimonials-grid">
          {shown.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-card-stars">
                <Star size={14} fill="currentColor" stroke="none" />
                <Star size={14} fill="currentColor" stroke="none" />
                <Star size={14} fill="currentColor" stroke="none" />
                <Star size={14} fill="currentColor" stroke="none" />
                <Star size={14} fill="currentColor" stroke="none" />
              </div>

              <p>“{testimonial.text}”</p>

              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonial-nav">
          <button className="arrow-btn" onClick={prev} aria-label="Testimonio anterior">
            <ChevronLeft size={18} />
          </button>

          <button className="arrow-btn" onClick={next} aria-label="Testimonio siguiente">
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="demo-note">
          * Testimonios de demostración. Reemplazables por reseñas reales del
          negocio.
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
