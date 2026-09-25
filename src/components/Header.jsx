function Header({ nombre, profesion }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>{nombre}</h1>
        <p>{profesion}</p>
      </div>
    </header>
  );
}
 
export default Header;