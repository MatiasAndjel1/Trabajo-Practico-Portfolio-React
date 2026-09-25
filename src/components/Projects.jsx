import { useState } from "react";
 
const proyectos = [
  {
    id: 1,
    titulo: "Sistema de calificaciones",
    descripcionCorta:
      "Aplicación web para gestionar materias y calificaciones.",
    descripcionLarga:
      "Aplicación desarrollada con HTML, CSS y JavaScript que permite " +
      "gestionar materias y calificaciones. Los datos se manejan a través " +
      "de una API local creada con JSON Server, simulando un backend " +
      "sencillo para practicar peticiones y manejo de datos.",
    tecnologias: ["HTML", "CSS", "JavaScript", "JSON Server"],
    github: "https://github.com/MatiasAndjel1",
  },
  {
    id: 2,
    titulo: "E-commerce",
    descripcionCorta: "Página de venta de productos con carrito de compras.",
    descripcionLarga:
      "Página web de venta de productos desarrollada con HTML, CSS y " +
      "JavaScript. Incluye manejo de usuarios, listado de productos y un " +
      "carrito de compras, con almacenamiento de la información " +
      "utilizando localStorage del navegador.",
    tecnologias: ["HTML", "CSS", "JavaScript", "localStorage"],
    github: "https://github.com/MatiasAndjel1",
  },
];
 
function Projects() {
  const [proyectoAbierto, setProyectoAbierto] = useState(null);
 
  function manejarVerMas(id) {
    if (proyectoAbierto === id) {
      setProyectoAbierto(null);
    } else {
      setProyectoAbierto(id);
    }
  }
 
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects-list">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcionCorta}</p>
 
            <ul className="project-tech">
              {proyecto.tecnologias.map((tec) => (
                <li key={tec}>{tec}</li>
              ))}
            </ul>
 
            {proyectoAbierto === proyecto.id && (
              <p className="project-detalle">{proyecto.descripcionLarga}</p>
            )}
 
            <div className="project-buttons">
              <button onClick={() => manejarVerMas(proyecto.id)}>
                {proyectoAbierto === proyecto.id ? "Ver menos" : "Ver más"}
              </button>
              <a href={proyecto.github} target="_blank" rel="noreferrer">
                Ver código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
 
export default Projects;
 