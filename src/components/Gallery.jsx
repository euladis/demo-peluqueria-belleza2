import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=500&q=85",
    title: "Balayage",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=500&q=85",
    title: "Coloración",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=85",
    title: "Manicura",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=500&q=85",
    title: "Facial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=85",
    title: "Peinado",
  },
];

function Gallery() {
  return (
    <section className="gallery section" id="galeria">
      <div className="section-container gallery-container">
        <div className="gallery-text">
          <span className="section-label">Galería</span>

          <h2>Resultados que hablan por sí solos</h2>

          <p>
            Inspirate con algunos de nuestros trabajos y mirá cómo realzamos
            la belleza en cada detalle.
          </p>

          <a href="#contacto" className="btn btn-outline-dark">
            Ver más fotos
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="gallery-row">
          {galleryImages.map((item) => (
            <div className="gallery-item" key={item.title}>
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
