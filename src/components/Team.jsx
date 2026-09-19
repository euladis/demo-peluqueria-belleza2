import { ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Camila",
    role: "Peluquería",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Valentina",
    role: "Coloración",
    image:
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Lucía",
    role: "Estética",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=85",
  },
  {
    name: "Sofía",
    role: "Manicura",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=300&q=85",
  },
];

function Team() {
  return (
    <section className="team section">
      <div className="section-container team-container">
        <div className="team-text">
          <span className="section-label">Nuestro equipo</span>

          <h2>Un equipo apasionado por la belleza</h2>

          <p>
            Contamos con profesionales que te asesoran y acompañan en cada
            paso, para que siempre te sientas cómoda y segura.
          </p>

          <a href="#contacto" className="btn btn-outline-dark">
            Conocé al equipo
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="team-row">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-avatar">
                <img src={member.image} alt={member.name} />
              </div>

              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
