import { ArrowUpRight, User, Gift, Flower2, HandHeart } from "lucide-react";

function About() {
  const features = [
    {
      icon: User,
      title: "Profesionales capacitadas",
      description: "Siempre en constante formación.",
    },
    {
      icon: Gift,
      title: "Productos de calidad",
      description: "Las mejores marcas del mercado.",
    },
    {
      icon: Flower2,
      title: "Ambiente relajante",
      description: "Tu tiempo es valioso.",
    },
    {
      icon: HandHeart,
      title: "Atención personalizada",
      description: "Cada clienta es única.",
    },
  ];

  return (
    <section className="about section" id="nosotros">
      <div className="section-container about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1703792686756-c82bf734c89b?auto=format&fit=crop&w=800&q=85"
            alt="Interior de peluquería"
          />
        </div>

        <div className="about-content">
          <span className="section-label">Sobre nosotros</span>

          <h2>Más que un salón, una experiencia</h2>

          <p className="about-intro">
            En Élan creemos que la belleza es una forma de sentirte bien. Por
            eso, te ofrecemos un ambiente cálido, profesionales capacitadas y
            productos de alta calidad para que vivas una experiencia única.
          </p>

          <a href="#contacto" className="btn btn-primary">
            Conocé más sobre nosotros
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="about-features">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="about-feature" key={feature.title}>
                <span className="about-feature-icon">
                  <Icon size={19} strokeWidth={1.5} />
                </span>

                <div>
                  <strong>{feature.title}</strong>
                  <span>{feature.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
