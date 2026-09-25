function Skills({ habilidades }) {
  return (
    <section className="skills">
      <h2>Habilidades</h2>
      <ul className="skills-list">
        {habilidades.map((habilidad) => (
          <li key={habilidad} className="skill-item">
            {habilidad}
          </li>
        ))}
      </ul>
    </section>
  );
}
 
export default Skills;
 