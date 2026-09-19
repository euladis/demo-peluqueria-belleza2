import {
  Scissors,
  Palette,
  Droplet,
  Flower2,
  Hand,
  Eye,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte y peinado",
    description: "El estilo que te hace sentir única.",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=500&q=85",
  },
  {
    icon: Palette,
    title: "Coloración",
    description: "Tonos que realzan tu personalidad.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=85",
  },
  {
    icon: Droplet,
    title: "Tratamientos capilares",
    description: "Cabello sano, fuerte y brillante.",
    image:
      "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=500&q=85",
  },
  {
    icon: Flower2,
    title: "Tratamientos faciales",
    description: "Limpieza, hidratación y rejuvenecimiento.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=500&q=85",
  },
  {
    icon: Hand,
    title: "Manicura y pedicura",
    description: "Detalles que hacen la diferencia.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=500&q=85",
  },
  {
    icon: Eye,
    title: "Diseño de cejas y pestañas",
    description: "Mirada que resalta tu belleza.",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=500&q=85",
  },
];

function Services() {
  return (
    <section className="services section" id="servicios">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">Nuestros servicios</span>
          <h2>Belleza y cuidado en un solo lugar</h2>

          <p>
            Ofrecemos una amplia variedad de servicios para que te sientas y
            te veas increíble. Cada tratamiento está pensado para resaltar tu
            belleza natural.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />

                  <div className="service-icon">
                    <Icon size={16} strokeWidth={1.6} />
                  </div>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#reserva" className="service-link">
                  Reservar
                  <ArrowUpRight size={13} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
