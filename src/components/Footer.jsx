function Footer() {
  const anioActual = new Date().getFullYear();
 
  return (
    <footer className="footer">
      <p>Matías Andjel — Estudiante de Programacion</p>
      <div className="footer-links">
        <a href="https://github.com/MatiasAndjel1" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:matiasandjel1@hotmail.com">
          matiasandjel1@hotmail.com
        </a>
      </div>
      <p className="footer-copy">© {anioActual} Matías Andjel</p>
    </footer>
  );
}
 
export default Footer;